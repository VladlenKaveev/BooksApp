import Flurry from 'react-native-flurry-sdk';
import Config from 'react-native-config';

export type Props = {
  id: string;
  name: string;
};

export class FlurryService {
  constructor(private FLURRY_IOS_API_KEY: string) {}
  public bookViews(eventID: string, data: Props): void {
    this.init();
    Flurry.logEvent(eventID, {data}, true);
  }

  private init(): void {
    new Flurry.Builder()
      .withCrashReporting(true)
      .withLogEnabled(true)
      .withLogLevel(Flurry.LogLevel.DEBUG)
      .build(this.FLURRY_IOS_API_KEY);
  }
}

const flurryService = new FlurryService(Config.FLURRY_IOS_API_KEY);
export default flurryService;
