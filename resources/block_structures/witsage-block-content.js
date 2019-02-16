// Create the blocks main ui to be wrapped in block_builders
import classnames from "classnames";

const {
	InnerBlocks
} = wp.editor;

const block_content = {};

//Static (hardcoded) block
block_content.static = props => (

	<div className={ classnames(
		'witsage-block-content',
		'witsage-block-content-static',
		props.className + '-witsage-block-content',
	) } style={ {
		paddingTop: props.blockContentPadding + 'vw',
		paddingBottom: props.blockContentPadding + 'vw',
		display: props.blockContentDisplay,
	} }
	>
		<div>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id leo blandit enim tincidunt fermentum. Quisque
			aliquet at nulla non luctus. Sed sem quam, faucibus vitae magna eget, iaculis varius est. Integer id ornare nunc.
			Quisque id luctus lectus, vitae gravida nulla. Vivamus fringilla vestibulum orci id lobortis. Aliquam at felis
			enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
			quis magna vel eros euismod ultrices non sed tortor. Aliquam sagittis mattis turpis ut molestie. Integer luctus
			est sed urna dictum, sit amet cursus ante congue. Donec porttitor venenatis augue at posuere. Aliquam quis
			condimentum quam, id facilisis enim. Sed vel sem tristique ipsum gravida mattis. In facilisis luctus elit vitae
			accumsan.
		</div>

		<div>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id leo blandit enim tincidunt fermentum. Quisque
			aliquet at nulla non luctus. Sed sem quam, faucibus vitae magna eget, iaculis varius est. Integer id ornare nunc.
			Quisque id luctus lectus, vitae gravida nulla. Vivamus fringilla vestibulum orci id lobortis. Aliquam at felis
			enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
			quis magna vel eros euismod ultrices non sed tortor. Aliquam sagittis mattis turpis ut molestie. Integer luctus
			est sed urna dictum, sit amet cursus ante congue. Donec porttitor venenatis augue at posuere. Aliquam quis
			condimentum quam, id facilisis enim. Sed vel sem tristique ipsum gravida mattis. In facilisis luctus elit vitae
			accumsan.
		</div>


	</div>/* End of .witsage-block-content */

); 	//END Static (hardcoded) block


// Nested Block
//	limit the type of allowed blocks
// https://wpdevelopment.courses/a-list-of-all-default-gutenberg-blocks-in-wordpress-5-0/
const ALLOWED_BLOCKS = [ 'core/image', 'core/heading', 'core/media-text', 'core/list' ];


block_content.inner = props => (

	<div className={ classnames(
		'witsage-block-content',
		'witsage-block-content-nested',
		props.className + '-witsage-block-content',
	) } style={ {
		paddingTop: props.blockContentPadding + 'vw',
		paddingBottom: props.blockContentPadding + 'vw',
		display: props.blockContentDisplay,
	} }
	>

		<InnerBlocks
			// allowedBlocks={ ALLOWED_BLOCKS }
			template={ [
				[ 'core/heading', { placeholder: 'Enter side content...' } ],
			] } />


	</div>/* End of .witsage-block-content */

); // END Nested Block


block_content.innerSave = props => (

	<div className={ classnames(
		'witsage-block-content',
		'witsage-block-content-nested',
		props.className + '-witsage-block-content',
	) } style={ {
		paddingTop: props.blockContentPadding + 'vw',
		paddingBottom: props.blockContentPadding + 'vw',
		display: props.blockContentDisplay,
	} }
	>
		<InnerBlocks.Content />

	</div>/* End of .witsage-block-content */

); // END Nested Block


export default block_content;
