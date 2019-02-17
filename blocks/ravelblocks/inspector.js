/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, PanelColorSettings } = wp.editor;
const {
  Button,
  PanelBody,
  TextControl,
  TextareaControl
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        textControl,
        textareaControl,
      },
      setAttributes
    } = this.props;

    return (
      <InspectorControls>

        <PanelBody>
          <TextControl
            label={__("Ravelry API Username", "ravelblocks")}
            /*value={this.state.apiUserTextControl}
            onChange={apiUserTextControl => this.setState({ apiUserTextControl })}*/
          />

          <TextControl
            label={__("Ravelry API Password", "ravelblocks")}
            /*value={this.state.apiPasswordTextControl}
            onChange={textControl => this.setState({ apiPasswordTextControl })}*/
          />

          <p>
          <a
            href="https://www.ravelry.com/api"
            target="_blank"
          >
            Instructions for getting a Ravelry API Key
          </a>
        </p>
        </PanelBody>

        
      </InspectorControls>
    );
  }
}
