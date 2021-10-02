import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import FloatInput from '../common/input/Input'
import CopyIcon from '../../assets/icons/copy'
import Dropdown from '../common/dropdown/Dropdown'

const CodingForm = ({ inputCard, exampleData }) => {
  const {
    fieldLabel,
    fieldType = 'text',
    fieldPlaceholder = '',
    fieldBottomLabel = '',
    editorLabel = '',
    editorPlaceholder = '',
    editorBottomLabel = '',
    fieldOptions = []
  } = inputCard
  const [languageSelectValue, setLanguageSelectValue] = useState(
    exampleData && exampleData.languageSelect
      ? exampleData.languageSelect.value
      : ''
  )

  let codeEditorSchema
  if (fieldType === 'text') {
    codeEditorSchema = Yup.object().shape({
      languageName: Yup.string()
        .min(10, 'Too Short!')
        .max(40, 'Too Long!')
        .required('Required'),
      codeEditor: Yup.string()
        .min(10, 'Too Short!')
        .max(500, 'Too Long!')
        .required('Required')
    })
  } else {
    codeEditorSchema = Yup.object().shape({
      codeEditor: Yup.string()
        .min(10, 'Too Short!')
        .max(500, 'Too Long!')
        .required('Required')
    })
  }

  return (
    <Formik
      initialValues={{
        languageName: exampleData ? exampleData.languageName : '',
        secondLanguageName: exampleData ? exampleData.secondLanguageName : '',
        codeEditor: exampleData ? exampleData.codeEditor : '',
        languageSelect: languageSelectValue || ''
      }}
      validationSchema={codeEditorSchema}
      onSubmit={async (values) => {
        console.log('valuse:', values)
      }}
    >
      {({ errors, touched, values }) => (
        <Form>
          <div className="field-wrapper">
            <p className="label">{fieldLabel}</p>
            {fieldType === 'text' && (
              <>
                <FloatInput
                  label={fieldLabel}
                  name="languageName"
                  placeholder={fieldPlaceholder}
                  textLimit={true}
                  value={values.languageName}
                />
                <p className="bottom-label">{fieldBottomLabel}</p>
              </>
            )}
            {fieldType === 'dropdown' && (
              <>
                <Dropdown
                  items={fieldOptions}
                  value={languageSelectValue}
                  onChange={(value) => {
                    setLanguageSelectValue(value)
                  }}
                />
              </>
            )}
          </div>
          {inputCard.secondFieldType && (
            <div className="field-wrapper">
              <p className="label">{inputCard.secondFieldLabel}</p>
              {inputCard.secondFieldType === 'text' && (
                <>
                  <FloatInput
                    label={inputCard.secondFieldLabel}
                    name="secondLanguageName"
                    placeholder={inputCard.secondFieldPlaceholder}
                    textLimit={true}
                    value={values.secondLanguageName}
                  />
                  <p className="bottom-label">{fieldBottomLabel}</p>
                </>
              )}
            </div>
          )}
          <div className="field-wrapper input-wrapper">
            <p className="label">{editorLabel}</p>
            <Field
              className="form__input"
              name="codeEditor"
              as="textarea"
              placeholder={editorPlaceholder}
            />
            {errors.codeEditor && touched.codeEditor ? (
              <span className="error-msg">{errors.codeEditor}</span>
            ) : null}
            <p className="character-allow-limit">50/400 characters</p>
            <p className="bottom-label">{editorBottomLabel}</p>
          </div>
          <div className="submit-buttons sign-in profile-buttons">
            <button className="submit-btn" type="submit">
              <CopyIcon />
              Enhance with ai
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default CodingForm
