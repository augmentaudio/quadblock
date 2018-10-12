// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';

import { Title } from '../layouts/utils';

const Header = ({ i18n }: Props) => (
  <header className="header text-white bg-quadblock">
    <Title title={i18n.t`Contact`} />

    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1><Trans>Let’s Get In Touch</Trans></h1>
          <p>
            <Trans>
              Here are the ways you can contact us with any questions you have
            </Trans>
          </p>
        </div>
      </div>
    </div>
  </header>
);

class Map extends React.Component<{}> {
  componentDidMount() {
    if (window.page && window.google) {
      window.page.initMap();
    }
  }
  render() {
    return (<div
      id="map"
      className="h-400"
      data-provide="map"
      data-lat="47.3627638"
      data-lng="8.5579592"
      data-marker-lat="47.3627638"
      data-marker-lng="8.5579592"
      data-zoom="14"
    />);
  }
}

const IndexPage = (props: Object) => (
  <div>
    <Header {...props} />

    <main className="main-content">

      <div className="section">
        <div className="container">

          <div className="bg-gray h-full p-5 imprint">

            <div className="row">
              <div className="col-md-6">
                <h6>Quad Blockchain</h6>
                <p>
                13 West St<br />
                Harrow<br />
                London<br />
                HA1 3ED<br />
                </p>
              </div>
              <div className="col-md-6">
                <h6><Trans>Contact</Trans></h6>
                <p>
                  <a href="mailto:contact@quadblock.co">contact@quadblock.co</a><br />
                        +44 (0) 20 866 34 66
                </p>
                <h6><Trans>Managing directors</Trans></h6>
                <p>
                Peter Bergeiz<br />
                Clarence Greets<br />
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Map />
    </main>
  </div>
);

export default withI18n()(IndexPage);
