// @flow

import * as React from 'react';
import { Helmet } from 'react-helmet';

export const name = 'quadblock';
export const appUrl = 'https://app.quadblock.co';
export const demoUrl = 'https://app.quadblock.co';
export const blogUrl = 'https://blog.quadblock.co';

export const Title = (props: {
  title: string,
  section?: string,
  description?: string,
}) => (
  <Helmet>
    <title>{props.title} {props.section && `| ${props.section}`} | {name}</title>
    {props.description && <meta name="description" content={props.description} />}

    <meta property="og:title" content={props.title} />
    {props.description && <meta property="og:description" content={props.description} />}

    <meta name="twitter:title" content={props.title} />
    {props.description && <meta name="twitter:description" content={props.description} />}
  </Helmet>
);
Title.defaultProps = { section: '', description: '' };
