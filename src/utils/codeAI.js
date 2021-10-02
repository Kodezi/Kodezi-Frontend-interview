export const getSubHeaderData = (aiType) => {
  let subHeaderData = {}
  switch (aiType) {
    case 'command':
      subHeaderData = {
        subHeaderImg: '/images/codeAI/command.png',
        subHeaderTitle: 'Commands',
        subHeaderSubTitle:
          'Using bash, git, powershell? Write what you need and get the command'
      }
      break
    case 'explain-code':
      subHeaderData = {
        subHeaderImg: '/images/codeAI/explain-code.png',
        subHeaderTitle: 'Explain Code',
        subHeaderSubTitle:
          'Interpret some code based on the language, code, and syntax provided'
      }
      break
    case 'fix-code':
      subHeaderData = {
        subHeaderImg: '/images/codeAI/fix-code.png',
        subHeaderTitle: 'Fix Code',
        subHeaderSubTitle:
          'Trying to solve a debug problem, try the bug solving code promt'
      }
      break
    case 'regex':
      subHeaderData = {
        subHeaderImg: '/images/codeAI/regex.png',
        subHeaderTitle: 'Regex Expression',
        subHeaderSubTitle:
          'Need help with the correct regex expression, describe it and get it'
      }
      break
    case 'clean-code':
      subHeaderData = {
        subHeaderImg: '/images/codeAI/clean-code.png',
        subHeaderTitle: 'Clean Code',
        subHeaderSubTitle: 'Write better code that is clean and simple to use'
      }
      break
    case 'js-to-ts':
      subHeaderData = {
        subHeaderImg: '/images/codeAI/javascript.png',
        subHeaderTitle: 'JavaScript to TypeScript',
        subHeaderSubTitle:
          'Covert regular JavaScript into TypeScript programming code'
      }
      break
    case 'wordpress':
      subHeaderData = {
        subHeaderImg: '/images/codeAI/wordpress.png',
        subHeaderTitle: 'WordPress Function',
        subHeaderSubTitle: 'Write better code that is clean and simple to use'
      }
      break
    case 'convert-code':
      subHeaderData = {
        subHeaderImg: '/images/codeAI/convert-code.png',
        subHeaderTitle: 'Convert Code',
        subHeaderSubTitle:
          'Swap Language for frame works for code, like React to vue'
      }
      break
    default:
      break
  }

  return subHeaderData
}

export const codeAITypesMap = {
  'explain-code': 'explainCode',
  command: 'command',
  'fix-code': 'fixCode',
  'regex-expression': 'regexExpression',
  'clean-code': 'cleanCode',
  'js-to-ts': 'javaScriptToTypeScript',
  wordpress: 'wordpress',
  'convert-code': 'convertCode'
}

export const codeAITypesData = {
  explainCode: {
    inputCard: {
      icon: '',
      heading: 'Explain Code',
      subHeading: 'Write details about your code below',
      fieldLabel: 'Language',
      fieldType: 'text',
      fieldPlaceholder: 'JavaScript...',
      fieldBottomLabel:
        'Which language are you using, will enable markup highlights',
      editorLabel: 'Code Editor',
      editorType: 'code',
      editorBottomLabel: 'Place some code above to understand how it works'
    },
    outputCard: {
      icon: '',
      heading: 'What does this code do',
      subHeading: 'The following code does:',
      outputType: 'list'
    },
    exampleData: {
      languageName: 'JavaScript',
      codeEditor: `function HelloWorld(text){ 
        let text || "Hello World"; 
        console.log(text);
      }`,
      output: [
        {
          label: 'The code above is a function defination.'
        },
        {
          label: `It defines a new function called “HelloWorld” that takes a
          single argument called “text"`
        },
        {
          label: `The body of the function is a single line of code that 
          prints out the value of “text” if it is defined, or “Hellow 
          World” if it is not defined.`
        }
      ]
    }
  },
  command: {
    inputCard: {
      icon: '',
      heading: 'Command Line Code',
      subHeading: 'What are you looking to have written?',
      fieldLabel: 'Command Line',
      fieldType: 'dropdown',
      fieldOptions: [
        {
          label: 'Bash',
          value: 'bash'
        },
        {
          label: 'Powershell',
          value: 'powershell'
        },
        {
          label: 'Git',
          value: 'git'
        },
        {
          label: 'Docker',
          value: 'docker'
        }
      ],
      fieldBottomLabel: 'Additional languages will be added in the future',
      editorLabel: 'What do you want to do?',
      editorType: 'textarea',
      editorBottomLabel:
        'Describe what you want to do using the command line selected'
    },
    outputCard: {
      icon: '',
      heading: 'Command/s',
      subHeading: 'The following code has been created for you:',
      outputType: 'plain'
    },
    exampleData: {
      languageSelect: {
        label: 'Bash',
        value: 'bash'
      },
      codeEditor: 'find out what are the top processes using cpu time',
      output: 'ps -eo pcpu,pid,user,args | sort -k3 -r | head'
    }
  },
  fixCode: {
    inputCard: {
      icon: '',
      heading: 'Correct faulty code',
      subHeading: 'Write details about your code below',
      fieldLabel: 'Language',
      fieldType: 'text',
      fieldBottomLabel:
        'Which language are you using, will enable markup highlights',
      editorLabel: 'Code Editor',
      editorType: 'code',
      editorBottomLabel: 'Place some code above to understand how it works'
    },
    outputCard: {
      icon: '',
      heading: 'Working Code',
      subHeading: 'The following code has been fixed:',
      outputType: 'plain'
    },
    exampleData: {
      languageName: 'JavaScript',
      codeEditor: `functin HelloWorld(text){
        ech text || "Hello World'; }`,
      output: `function HelloWorld(text){
        echo text || "Hello World";
      }`
    }
  },
  regexExpression: {
    inputCard: {
      icon: '',
      heading: 'Regular Expression',
      subHeading: 'What do you want your regex to do?',
      fieldLabel: 'Language',
      fieldType: 'dropdown',
      fieldOptions: [
        {
          label: 'JavaScript',
          value: 'javascript'
        }
      ],
      fieldBottomLabel: 'Additional languages will be added in the future',
      editorLabel: 'Explain what you want your regex to do',
      editorType: 'textarea',
      editorBottomLabel:
        'Describe what you want to do using the command line selected'
    },
    outputCard: {
      icon: '',
      heading: 'Regex Expression',
      subHeading: 'The following regex has been created for you:',
      outputType: 'plain'
    },
    exampleData: {
      languageSelect: {
        label: 'JavaScript',
        value: 'javascript'
      },
      codeEditor: 'pull the domain out of an email address john@smith.com',
      // eslint-disable-next-line no-useless-escape
      output: `const regEmailDomain = /[a-z0-9][-.a-z0-9]*\.[a-z]{2,4}/;
      console.log(regEmailDomain.exec('john@smith.com'));
      // output: ["smith.com"]`
    }
  },
  cleanCode: {
    inputCard: {
      icon: '',
      heading: 'Poorly written code',
      subHeading: 'Write details about your code below',
      fieldLabel: 'Language',
      fieldType: 'text',
      fieldBottomLabel:
        'Which language are you using, will enable markup highlights',
      editorLabel: 'Code Editor',
      editorType: 'code',
      editorBottomLabel: 'Place some code above to understand how it works'
    },
    outputCard: {
      icon: '',
      heading: 'Improved Code',
      subHeading: 'The following code has been improved:',
      outputType: 'plain'
    },
    exampleData: {
      languageName: 'JavaScript',
      codeEditor: `const doubleList = (list) => {
        const newList = []
        for(var i=0;i<list.length;i++){
          newList[i] = list[i] * 2;
        }
        return newList;
      };`,
      output: 'const doubleList = list => list.map(listItem => listItem * 2)'
    }
  },
  javaScriptToTypeScript: {
    inputCard: {
      icon: '',
      heading: 'Script Conversion',
      subHeading: 'The following code to be converted',
      fieldLabel: 'Conversion',
      fieldType: 'dropdown',
      fieldOptions: [
        {
          label: 'JavaScript to TypeScript',
          value: 'jsTots'
        },
        {
          label: 'TypeScript to JavaScript',
          value: 'tsTojs'
        }
      ],
      fieldBottomLabel: 'Convert traditional code from JS to TS or visa versa',
      editorLabel: 'Current Code',
      editorType: 'code',
      editorBottomLabel: 'Place some code above to understand how it works'
    },
    outputCard: {
      icon: '',
      heading: 'Converted code',
      subHeading: 'The following code was converted:',
      outputType: 'plain'
    },
    exampleData: {
      languageSelect: {
        label: 'JavaScript to TypeScript',
        value: 'jsTots'
      },
      codeEditor: `import React from 'react'

      const Header = ({text, color}) => {
        return <h1 style={{ color }}>{text}</h1>
      }
      
      Header.defaultProps = {
        color: 'red',
        text: 'Hello world!'
      }`,
      output: `import React from 'react'

      type Props = {
        text: string;
        color: string;
      }
      
      const Header: React.FC<Props> = ({text = 'Hello world!', color = 'red'}) => {
        return <h1 style={{ color }}>{text}</h1>
      }`
    }
  },
  wordpress: {
    inputCard: {
      icon: '',
      heading: 'What do you need',
      subHeading: 'Enter what you require wordpress to do',
      fieldLabel: 'CMS',
      fieldType: 'dropdown',
      fieldOptions: [
        {
          label: 'WordPress',
          value: 'wordpress'
        }
      ],
      fieldBottomLabel: '',
      editorLabel: 'What do you want to do?',
      editorType: 'textarea',
      editorBottomLabel:
        'Describe what you want to do using the language selected'
    },
    outputCard: {
      icon: '',
      heading: 'Generated Code',
      subHeading: 'The following code has been created for you:',
      outputType: 'plain'
    },
    exampleData: {
      languageSelect: {
        label: 'WordPress',
        value: 'wordpress'
      },
      codeEditor: 'Create a widget that shows the current time',
      output: `function widget_time() {
        echo '<p>It is now '.get_the_time('F jS, Y') .'</p>';
      }
      add_action('widgets_init', 'widget_time');`
    }
  },
  convertCode: {
    inputCard: {
      icon: '',
      heading: 'Current code block',
      subHeading: 'Write details about your code below',
      fieldLabel: 'Current',
      fieldPlaceholder: 'JavaScript...',
      fieldType: 'text',
      fieldBottomLabel: 'Language or Framework current block exists in',
      secondFieldLabel: 'New',
      secondFieldPlaceholder: 'JavaScript...',
      secondFieldType: 'text',
      secondFieldBottomLabel: 'What language or framework the output should be',
      editorLabel: 'Current Code',
      editorType: 'code',
      editorBottomLabel: 'Place some code above to understand how it works'
    },
    outputCard: {
      icon: '',
      heading: 'Converted Code',
      subHeading: 'The following code has been converted:',
      outputType: 'plain'
    },
    exampleData: {
      languageName: 'JavaScript',
      secondLanguageName: 'JavaScript',
      codeEditor: `import React, { Component } from 'react'
      export default class index extends Component {
        render() {
          return (
            <div>
              Hello World
            </div>
            )
          }
        }`,
      output: `import Vue from 'vue'
      export default Vue.extend({
        render() {
          return (
            <div>
              Hello World
            </div>
            )
          }
        }`
    }
  }
}
