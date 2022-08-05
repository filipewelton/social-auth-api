import { Strategy } from "passport-facebook";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";

import {
  callbackURL,
  clientID,
  clientSecret,
} from "../../credentials/facebook.json";

@Injectable()
class FacebookStrategy extends PassportStrategy(Strategy, "facebook") {
  constructor() {
    super({
      clientID,
      clientSecret,
      callbackURL,
    });
  }

  async validate(
    accessToken: string,
    _refreshToken: string,
    profile: any,
    done: Function
  ): Promise<void> {
    const { id, displayName, provider } = profile;
    const [firstName, lastName] = displayName.split(" ");
    const user = {
      provider,
      accessToken,
      firstName,
      lastName,
    };

    done(null, user);
  }
}

export { FacebookStrategy };
