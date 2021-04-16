import Flurry from 'react-native-flurry-sdk';
import Config from 'react-native-config';

export class FlurryService {
  constructor(private FLURRY_IOS_API_KEY: string) {}

  public createEvent(eventID: string, data: string): void {
    Flurry.logEvent(eventID, {data}, false);
  }

  public init(): void {
    new Flurry.Builder()
      .withCrashReporting(true)
      .withLogEnabled(true)
      .withLogLevel(Flurry.LogLevel.DEBUG)
      .build(this.FLURRY_IOS_API_KEY);
  }

  public getVersion(): void {
    Flurry.getVersions().then(versions => {
      console.log(
        'Versions: ' +
          versions.agentVersion +
          ' : ' +
          versions.releaseVersion +
          ' : ' +
          versions.sessionId,
      );
    });
  }
}

const flurryService = new FlurryService(Config.FLURRY_IOS_API_KEY);
export default flurryService;
