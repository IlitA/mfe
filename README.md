## What is Microfrontends?
- Divide a monolithic app into multiple, smaller apps
- Each smaller app is responsible for a distinct feature of the product.

## Motivation
- Work in isolation - each team can work on part of the app and make technical decisions on their part (for example, team A works with react while team B wants to work with angular).
- Each smaller app is easier to understand and make changes to
- No direct communication/dependencies between the smaller applications - that means that you can brake one part of the applications, but not the whole page/app

<!-- ## What was done?
- 3 MFEs (2 React, 1 Vue) + a container.
<!-- - Github workflows that build and deploy (using AWS s3) each MFE separately - Deployed on https://d3h0abycq4weqg.cloudfront.net/ -->
