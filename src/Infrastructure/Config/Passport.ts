import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import UserRepository from "../Repositories/UserRepository";


const userRepository = new UserRepository();

const JWT_SECRET = 'videogame_review_web_site';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
};
passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
        const user = await userRepository.findUserById(jwt_payload.id);
        if (user) {
            return done(null, user);
        }
        return done(null, false, { message: 'No esta autorizado'});
    } catch (err) {
        return done(err, false);
    }
}));

export default passport;
