/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { Button } = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Edit extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const {
            attributes: className, setAttributes  } = this.props;

        return (
            <div className={ className }>


                <Button isDefault>
                    Buy Pattern on Ravelry
                </Button>

            </div>
        );
    }
}
