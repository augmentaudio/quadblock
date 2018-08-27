// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import { FeatureLinks } from '../components/Features';
import { demoUrl } from '../layouts/utils';

const Header = ({ i18n, data, prefix }: Props) => (
  <header className="header bg-quadblock pb-0">
    <div className="container">
      <div className="row align-items-end gap-y mt-5 pb-7">

        <div className="col-lg-6 ml-auto">
          <div className="mb-4 text-white">
            <h1><Trans>Build knowledge in Blockchain</Trans></h1>
            <p>
              <Trans>
              Quad consultancy helps companies to understand and invest in blockchain technology.
              We study evolving use cases of disruptive value chains that can be applied across all
              industries.
                <br /><br />
                Get a comprehensive overview of your investment strategy and check the status of your
                vesting schedule.
              </Trans>
            </p>
            <p><Trans>Try Quadblock now. It’s <Link href to={`${prefix}/pricing/`}>free</Link>.</Trans></p>
          </div>
          <a className="btn btn-block d-sm-inline btn-xl mx-1 btn-round btn-outline-light" href={demoUrl} target="_blank" rel="noopener noreferrer"><Trans>See the demo</Trans></a>
          <a className="btn btn-block d-sm-inline btn-xl mx-1 btn-round btn-light" href="#references"><Trans>Get Started</Trans></a>
        </div>

        <div className="col-lg-6 order-lg-first" data-aos="fade-up">
          <Img {...data.laptop} alt={i18n.t`Screenshot of the quadblock app`} />
        </div>


      </div>
    </div>
  </header>
);

const Reference = ({ img, name }: { img: Object, name: string }) => (
  <div style={{ width: '200px' }} className="my-4">
    <Img {...img} alt={name} />
  </div>
);

const IndexPage = (props: Props) => (
  <div>
    <Header {...props} />
    <main className="main-content">


      <section className="section py-7" id="references">
        <div className="container">
          <header className="section-header mb-3">
            <h2><Trans>You’re in good company</Trans></h2>
            <hr className="my-2" />
            <p>
              <Trans>
                Many successful companies already use quadblock to manage their ownership
              </Trans>
            </p>
          </header>

          <div className="partner">
            <Reference img={props.data.bexio} name="Bexio" />
            <Reference img={props.data.cryptofund} name="CryptoFund" />
            <Reference img={props.data.viu} name="VIU Eyeware" />
            <Reference img={props.data.allthings} name="Allthings Technologies" />
            <Reference img={props.data.farmy} name="Farmy" />
            <Reference img={props.data.sherpany} name="Sherpany" />
            <Reference img={props.data.frontify} name="Frontify" />
            <Reference img={props.data.quitt} name="quitt.ch" />

          </div>

          <div className="mx-auto text-center mt-5">
            <Link href to={`${props.prefix}/features/`} className="btn btn-block d-sm-inline btn-round btn-xl btn-outline-primary mt-6" >
              <Trans>Find out why they trust us</Trans>
            </Link>
          </div>


          <FeatureLinks {...props} page="index" />

        </div>
      </section>

    </main>
  </div>
);

export default withI18n()(IndexPage);

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query IndexQuery {
    ...FeaturesFragment

    laptop: imageSharp(id: { regex: "/laptop.png/" }) {
      sizes(maxWidth: 2000) { ...GatsbyImageSharpSizes_noBase64 }
    }

    viu: imageSharp(id: { regex: "/viu/" }) {
      resolutions(width: 120) { ...GatsbyImageSharpResolutions }
    }
    quitt: imageSharp(id: { regex: "/quitt/" }) {
      resolutions(width: 80) { ...GatsbyImageSharpResolutions }
    }
    cryptofund: imageSharp(id: { regex: "/cryptofund/" }) {
      resolutions(width: 180) { ...GatsbyImageSharpResolutions }
    }
    sherpany: imageSharp(id: { regex: "/sherpany/" }) {
      resolutions(width: 150) { ...GatsbyImageSharpResolutions }
    }
    frontify: imageSharp(id: { regex: "/frontify/" }) {
      resolutions(width: 150) { ...GatsbyImageSharpResolutions }
    }
    bexio: imageSharp(id: { regex: "/bexio/" }) {
      resolutions(width: 110) { ...GatsbyImageSharpResolutions }
    }
    allthings: imageSharp(id: { regex: "/allthings/" }) {
      resolutions(width: 150) { ...GatsbyImageSharpResolutions }
    }
    farmy: imageSharp(id: { regex: "/farmy/" }) {
      resolutions(width: 130) { ...GatsbyImageSharpResolutions }
    }
  }
`;
