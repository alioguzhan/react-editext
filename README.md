# react-editext

> Editable Text Component for React Applications

[![NPM](https://img.shields.io/npm/v/react-editext.svg)](https://www.npmjs.com/package/react-editext)
[![npm](https://img.shields.io/npm/dm/react-editext.svg)](https://www.npmjs.com/package/react-editext)
[![Github](https://github.com/alioguzhan/react-editext/workflows/build/badge.svg)](https://github.com/alioguzhan/react-editext/actions)
[![codecov](https://codecov.io/gh/alioguzhan/react-editext/branch/master/graph/badge.svg)](https://codecov.io/gh/alioguzhan/react-editext)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=alioguzhan_react-editext&metric=alert_status)](https://sonarcloud.io/dashboard?id=alioguzhan_react-editext)
[![All Contributors](https://img.shields.io/badge/all_contributors-8-orange.svg?style=flat-square)](#contributors)

## Install

```bash
npm install --save react-editext
```

Or with yarn:

```bash
yarn add react-editext
```

## Usage

EdiText is highly customizable. You can see more examples [here](https://alioguzhan.github.io/react-editext/). Here is a basic usage:

```jsx
import React, { useState } from 'react'

import EdiText from 'react-editext'

function Example(props) {
  const [value, setValue] = useState('What is real? How do you define real?')

  const handleSave = (val) => {
    console.log('Edited Value -> ', val)
    setValue(val)
  }
  return (
    <div className="container">
      <EdiText type="text" value={value} onSave={handleSave} />
    </div>
  )
}
```

There is also a codesandbox template that you can fork and play with it:

[![Edit react-editext-template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-editext-template-5twrh?fontsize=14&hidenavigation=1&theme=dark)

You can customize almost everything based on your needs. Please navigate to [Props](#Props) section. I mean, just scroll down.

## Props

| Prop                   | Type     | Required | Default       | Note                                                                                                                                                                                                         |
| ---------------------- | -------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| value                  | string   | Yes      | `''`          | Value of the content and input [in edit mode]                                                                                                                                                                |
| type                   | string   | Yes      | text          | Input type. Possible options are: `text`, `password`, `number`, `email`, `textarea`, `date`, `datetime-local`, `time`, `month`, `url`, `week`, `tel`                                                         |
| hint                   | node     | No       | `''`          | A simple hint message appears at the bottom of input element. Any valid element is allowed.                                                                                                                  |
| onSave                 | function | Yes      |               | Function will be called when save button clicked. `value` and `inputProps` are passed to cb.                                                                                                                 |
| inputProps             | object   | No       |               | Props to be passed to input element. Any kind of valid DOM attributes are welcome.                                                                                                                           |
| viewProps              | object   | No       |               | Props to be passed to div element that shows the text. You can specify your own `styles` or `className`                                                                                                      |
| validation             | function | No       |               | Pass your own validation function. takes one param -> `value`. It must return `true` or `false`                                                                                                              |
| validationMessage      | node     | No       | Invalid Value | If validation fails this message will appear                                                                                                                                                                 |
| onValidationFail       | function | No       |               | Pass your own function to track when validation failed. See Examples page for the usage.                                                                                                                     |
| onCancel               | function | No       |               | Function will be called when editing is cancelled. `value` and `inputProps` are passed as params.                                                                                                            |
| saveButtonContent      | node     | No       | `''`          | Content for save button. Any valid element is allowed. Default is: &#10003;                                                                                                                                  |
| cancelButtonContent    | node     | No       | `''`          | Content for cancel button. Any valid element is allowed. Default is: &#10005;                                                                                                                                |
| editButtonContent      | node     | No       | `''`          | Content for edit button. Any valid element is allowed. Default is: &#9998;                                                                                                                                   |
| saveButtonClassName    | string   | No       |               | Custom class name for save button.                                                                                                                                                                           |
| cancelButtonClassName  | string   | No       |               | Custom class name for cancel button.                                                                                                                                                                         |
| editButtonClassName    | string   | No       |               | Custom class name for edit button.                                                                                                                                                                           |
| viewContainerClassName | string   | No       |               | Custom class name for the container in `view` mode.[See here](https://alioguzhan.github.io/react-editext/#custom-classes-for-containers)                                                                     |
| editContainerClassName | string   | No       |               | Custom class name for the container in edit mode. Will be set to `viewContainerClassName` if you set it and omit this. See [here](https://alioguzhan.github.io/react-editext/#custom-classes-for-containers) |
| mainContainerClassName | string   | No       |               | Custom class name for the top-level main container. See [here](https://alioguzhan.github.io/react-editext/#custom-classes-for-containers)                                                                    |
| hideIcons              | bool     | No       | `false`       | Set it to `true` if you don't want to see default icons on action buttons. See Examples page for more details.                                                                                               |
| buttonsAlign           | string   | No       | `after`       | Set this to `before` if you want to locate action buttons before the input instead of after it. See [here](https://alioguzhan.github.io/react-editext/#change-buttons-location).                             |
| editOnViewClick        | bool     | No       | `false`       | Set it to `true` if you want clicking on the view to activate the editor.                                                                                                                                    |
| editing                | bool     | No       | `false`       | Set it to `true` if you want the view state to be edit mode.                                                                                                                                                 |
| onEditingStart         | function | No       |               | Function that will be called when the editing mode is active. See [here](https://alioguzhan.github.io/react-editext/#events)                                                                                 |
| showButtonsOnHover     | bool     | No       | `false`       | Set it to `true` if you want to display action buttons **only** when the text hovered by the user. See [here](https://alioguzhan.github.io/react-editext/#show-on-hover)                                     |
| submitOnEnter          | bool     | No       | `false`       | Set it to `true` if you want to submit the form when `Enter` is pressed. **Be careful if you have multiple instances of `<EdiText/>` on the same page.**                                                     |
| cancelOnEscape         | bool     | No       | `false`       | Set it to `true` if you want to cancel the form when `Escape` is pressed. See [here](https://alioguzhan.github.io/react-editext/#save-on-enter)                                                              |
| cancelOnUnfocus        | bool     | No       | `false`       | Set it to `true` if you want to cancel the form when clicked outside of the input. See [here](https://alioguzhan.github.io/react-editext/#cancel-on-blur)                                                    |
| submitOnUnfocus        | bool     | No       | `false`       | Set it to `true` if you want to submit the form when clicked outside of the input. See [here](https://alioguzhan.github.io/react-editext/#submit-on-blur)                                                    |
| startEditingOnFocus    | bool     | No       | `false`       | Activates the edit mode when the view container is in focus. See [here](https://alioguzhan.github.io/react-editext/#edit-on-focus)                                                                           |
| startEditingOnEnter    | bool     | No       | `false`       | Activates the edit mode when the `Enter` key is pressed. See [here](https://alioguzhan.github.io/react-editext/#edit-on-enter)                                                                               |
| tabIndex               | number   | No       |               | An helper shortcut in case you want to pass the same tabIndex to both `viewProps` and `inputProps`.                                                                                                          |
| renderValue            | function | No       |               | Custom render method for the content in the view mode.Use this prop to customize the displayed value in view mode. [See here](https://alioguzhan.github.io/react-editext#render-value)                       |

## Styling with `styled-components`

You can style your `<EdiText/>` components with `styled-components` or similar libraries. You can either target internal HTML elements by their `type` ( or `order`) , or you can select them by attribute values.

Each customizable HTML element has a `editext=xxx` attribute. Use below as a reference table:

| Attr. Value        | Description                                                                      |
| ------------------ | -------------------------------------------------------------------------------- |
| `view-container`   | the container in `view` mode                                                     |
| `edit-container`   | the container in `edit` mode                                                     |
| `button-container` | the container for the `save` and `cancel` buttons                                |
| `edit-button`      | use this to style the **edit button**                                            |
| `save-button`      | use this to style the **save button**                                            |
| `cancel-button`    | use this to style the **cancel button**                                          |
| `input`            | There is only one input. You can select it directly or just use this attr value. |
| `hint`             | To style the hint container.                                                     |

Usage:

```css
button[editext='cancel-button'] {
  &:hover {
    background: crimson;
    color: #fff;
  }
}

div[editext='view-container'] {
  background: #6293c3;
  padding: 15px;
  border-radius: 5px;
  color: #fff;
}

input,
textarea {
  /** or input[editext="input"] {} */
  background: #1d2225;
  color: #f4c361;
  font-weight: bold;
  border-radius: 5px;
}
```

> See [the example code](https://alioguzhan.github.io/react-editext/#styled-components).

## Browser Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| :white_check_mark:                                                                                                                                                                                            | :white_check_mark:                                                                                                                                                                                                | :white_check_mark:                                                                                                                                                                                            | :white_check_mark:                                                                                                                                                                                                            | :white_check_mark:                                                                                                                                                                                        | :white_check_mark: :exclamation:                                                                                                                                                                                |

* `rows` prop for textarea has no effect in IE/Edge. You can set its `height` with some css.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/alioguzhan"><img src="https://avatars2.githubusercontent.com/u/1928541?v=4?s=100" width="100px;" alt=""/><br /><sub><b>alioguzhan</b></sub></a><br /><a href="https://github.com/alioguzhan/react-editext/commits?author=alioguzhan" title="Code">💻</a> <a href="https://github.com/alioguzhan/react-editext/commits?author=alioguzhan" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/jdoklovic"><img src="https://avatars2.githubusercontent.com/u/620106?v=4?s=100" width="100px;" alt=""/><br /><sub><b>jdoklovic</b></sub></a><br /><a href="https://github.com/alioguzhan/react-editext/commits?author=jdoklovic" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/wesoft-systems"><img src="https://avatars3.githubusercontent.com/u/8137662?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Obed Castillo</b></sub></a><br /><a href="https://github.com/alioguzhan/react-editext/commits?author=wesoft-systems" title="Code">💻</a></td>
    <td align="center"><a href="https://brunoaderaldo.netlify.com/"><img src="https://avatars3.githubusercontent.com/u/14007590?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bruno Aderaldo</b></sub></a><br /><a href="https://github.com/alioguzhan/react-editext/issues?q=author%3ABrunoAderaldo" title="Bug reports">🐛</a> <a href="https://github.com/alioguzhan/react-editext/commits?author=BrunoAderaldo" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/esskar"><img src="https://avatars1.githubusercontent.com/u/65206?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sascha Kiefer</b></sub></a><br /><a href="#question-esskar" title="Answering Questions">💬</a> <a href="#ideas-esskar" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/sanehab"><img src="https://avatars0.githubusercontent.com/u/36003641?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ehab Alsharif</b></sub></a><br /><a href="https://github.com/alioguzhan/react-editext/commits?author=sanehab" title="Code">💻</a> <a href="https://github.com/alioguzhan/react-editext/commits?author=sanehab" title="Documentation">📖</a></td>
    <td align="center"><a href="http://agiliti.in"><img src="https://avatars3.githubusercontent.com/u/4962589?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Harsha N Hegde</b></sub></a><br /><a href="https://github.com/alioguzhan/react-editext/issues?q=author%3Ahnhegde" title="Bug reports">🐛</a> <a href="https://github.com/alioguzhan/react-editext/commits?author=hnhegde" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://www.creativesoapbox.com"><img src="https://avatars1.githubusercontent.com/u/940266?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Justin Kuntz</b></sub></a><br /><a href="#ideas-justinkuntz" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/alioguzhan/react-editext/issues?q=author%3Ajustinkuntz" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://soncco.com"><img src="https://avatars0.githubusercontent.com/u/1321736?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Braulio Soncco</b></sub></a><br /><a href="#ideas-soncco" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/zig"><img src="https://avatars3.githubusercontent.com/u/85303?v=4?s=100" width="100px;" alt=""/><br /><sub><b>zig</b></sub></a><br /><a href="https://github.com/alioguzhan/react-editext/issues?q=author%3Azig" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/isaiahtaylor"><img src="https://avatars1.githubusercontent.com/u/57509275?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Isaiah Taylor</b></sub></a><br /><a href="#ideas-isaiahtaylor" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/anz000"><img src="https://avatars2.githubusercontent.com/u/12726957?v=4?s=100" width="100px;" alt=""/><br /><sub><b>anz000</b></sub></a><br /><a href="#ideas-anz000" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/amirmishani"><img src="https://avatars0.githubusercontent.com/u/11446580?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Amir M</b></sub></a><br /><a href="#ideas-amirmishani" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/harshilparmar"><img src="https://avatars3.githubusercontent.com/u/45915468?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Harshil Parmar</b></sub></a><br /><a href="https://github.com/alioguzhan/react-editext/commits?author=harshilparmar" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://brandonbits.com"><img src="https://avatars.githubusercontent.com/u/17344791?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brandon Paris</b></sub></a><br /><a href="https://github.com/alioguzhan/react-editext/issues?q=author%3Abrandonparis" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://chris.schaub.com"><img src="https://avatars.githubusercontent.com/u/3321008?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Christopher Schaub</b></sub></a><br /><a href="#ideas-chrisschaub" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [alioguzhan](https://github.com/alioguzhan)
