# react-hooks-multi-step-wizard

> A super-fast, bare-bones package to get you started creating a wizard with React hooks.

> Built with React 16.9, and modern APIs. Functions over classes, maintaining state with Custom Hooks.

[![NPM](https://img.shields.io/npm/v/react-hooks-multi-step-wizard.svg)](https://www.npmjs.com/package/@by/react-hooks-multi-step-wizard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i react-hooks-multi-step-wizard
```

## Usage

```tsx
import * as React from 'react'

import { Wizard, Steps, Step, Navigation } from 'react-hooks-multi-step-wizard'

const Wizard = () => (
  <Wizard>
    <Steps>
      <Step>
        step 1
      </Step>
      <Step>
        step 2
      </Step>
    </Steps>
    <Navigation />
  </Wizard>
)
```


## License

MIT © [brianyang](https://github.com/brianyang)

---
