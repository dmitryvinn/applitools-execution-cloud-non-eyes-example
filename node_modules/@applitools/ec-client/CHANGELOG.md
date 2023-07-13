# Changelog

## [1.5.0](https://github.com/applitools/eyes.sdk.javascript1/compare/js/ec-client@1.4.0...js/ec-client@1.5.0) (2023-06-28)


### Features

* bump `execution-grid-tunnel` to 2.1.6 ([2840ddf](https://github.com/applitools/eyes.sdk.javascript1/commit/2840ddfc08518495d3a5ba58c33569c213a0eac3))


### Dependencies

* @applitools/tunnel-client bumped from 0.1.0 to 0.1.1
  #### Bug Fixes

  * bump `execution-grid-tunnel` to 2.1.6 in tunnel-client ([54f4824](https://github.com/applitools/eyes.sdk.javascript1/commit/54f48249c4d82936366fbd4df5f77a74ffc1b6b4))

## [1.4.0](https://github.com/applitools/eyes.sdk.javascript1/compare/js/ec-client@1.3.0...js/ec-client@1.4.0) (2023-06-28)


### Features

* handled abandoned tunnels ([#1669](https://github.com/applitools/eyes.sdk.javascript1/issues/1669)) ([e01a9f6](https://github.com/applitools/eyes.sdk.javascript1/commit/e01a9f6f7543fc5e6bd842acf6ee8de8cfb49998))


### Bug Fixes

* remove content type when request doesn't contain any body ([354e877](https://github.com/applitools/eyes.sdk.javascript1/commit/354e8779af9e0be2d9ec1f321acd312862448f91))


### Dependencies

* @applitools/utils bumped from 1.4.0 to 1.5.0
  #### Features

  * handled abandoned tunnels ([#1669](https://github.com/applitools/eyes.sdk.javascript1/issues/1669)) ([e01a9f6](https://github.com/applitools/eyes.sdk.javascript1/commit/e01a9f6f7543fc5e6bd842acf6ee8de8cfb49998))
* @applitools/tunnel-client bumped from 0.0.5 to 0.1.0
  #### Features

  * handled abandoned tunnels ([#1669](https://github.com/applitools/eyes.sdk.javascript1/issues/1669)) ([e01a9f6](https://github.com/applitools/eyes.sdk.javascript1/commit/e01a9f6f7543fc5e6bd842acf6ee8de8cfb49998))



* @applitools/core-base bumped from 1.2.0 to 1.2.1

* @applitools/image bumped from 1.0.35 to 1.0.36

* @applitools/logger bumped from 2.0.4 to 2.0.5

* @applitools/req bumped from 1.3.2 to 1.3.3

* @applitools/driver bumped from 1.12.3 to 1.12.4

* @applitools/socket bumped from 1.1.4 to 1.1.5

* @applitools/spec-driver-webdriver bumped from 1.0.35 to 1.0.36


## [1.3.0](https://github.com/applitools/eyes.sdk.javascript1/compare/js/ec-client@1.2.34...js/ec-client@1.3.0) (2023-06-21)


### Features

* put in a queue create tunnel requests which cannot succeed due to a limit ([3309147](https://github.com/applitools/eyes.sdk.javascript1/commit/33091473f3fcbc4dd5fc853624bbe441ce11ce87))


### Dependencies

* @applitools/core-base bumped from 1.1.58 to 1.2.0
  #### Features

  * **js/core-base:** new feature ([dd5705d](https://github.com/applitools/eyes.sdk.javascript1/commit/dd5705d5e99d34f9492e890a0b4af6c52d6b33e3))


  #### Bug Fixes

  * rerelease ([2d46d0c](https://github.com/applitools/eyes.sdk.javascript1/commit/2d46d0c9ee14a72406e60350d4cce92991272afd))



* @applitools/driver bumped from 1.12.2 to 1.12.3

* @applitools/logger bumped from 2.0.3 to 2.0.4
  #### Bug Fixes

  * fixed issue when extended logger didn't preserve base's handler ([7c5e029](https://github.com/applitools/eyes.sdk.javascript1/commit/7c5e0299522f792aad72b7b3827df31a1ab2d68f))
* @applitools/socket bumped from 1.1.3 to 1.1.4

* @applitools/spec-driver-webdriver bumped from 1.0.34 to 1.0.35


## [1.2.34](https://github.com/applitools/eyes.sdk.javascript1/compare/js/ec-client@1.2.33...js/ec-client@1.2.34) (2023-06-15)


### Bug Fixes

* solve mismatch between content type and body in some commands ([#1660](https://github.com/applitools/eyes.sdk.javascript1/issues/1660)) ([8d1d486](https://github.com/applitools/eyes.sdk.javascript1/commit/8d1d4863d09af8266e93c59f99fa9f5a497652a9))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @applitools/core-base bumped from 1.1.57 to 1.1.58
    * @applitools/req bumped from 1.3.1 to 1.3.2
    * @applitools/socket bumped from 1.1.2 to 1.1.3

## [1.2.33](https://github.com/applitools/eyes.sdk.javascript1/compare/js/ec-client-v1.2.32...js/ec-client@1.2.33) (2023-06-13)


### Dependencies

* update some dependencies
* The following workspace dependencies were updated
  * dependencies
    * @applitools/core-base bumped from 1.1.56 to 1.1.57
    * @applitools/driver bumped from 1.12.1 to 1.12.2
    * @applitools/logger bumped from 2.0.2 to 2.0.3
    * @applitools/req bumped from 1.3.0 to 1.3.1
    * @applitools/socket bumped from 1.1.1 to 1.1.2
    * @applitools/spec-driver-webdriver bumped from 1.0.33 to 1.0.34
    * @applitools/utils bumped from 1.3.37 to 1.4.0
