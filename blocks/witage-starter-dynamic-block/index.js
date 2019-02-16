/**
 * WitSage Starter Dynamic Block
 *
 * @TODO Code splitting for Attributes. Inspector and Controls. Scheme TBD
 * @TODO attribute values set by functions not by controls.
 * @TODO Cleanup naming - img to backgroundimage etc.
 *
 *
 */

// Dependencies
import classnames from "classnames";   // https://github.com/JedWatson/classnames

// Block Elements and Styling
import icon from './icon';
import './style.scss';
import './editor.scss';

//Project Resources
// import icons from "../../resources/icons";

// Code Splitting
import attributes from './attributes';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const {
	AlignmentToolbar,
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
	PlainText
} = wp.editor;

const {
	PanelBody,
	PanelRow,
	RadioControl,
	SelectControl,
	ServerSideRender
} = wp.components;

/**
 * Register block
 */
export default registerBlockType(
	'witsage-blocks/starter-dynamic-block',
	{
		title: __( 'WS Starter Dynamic Block' ),
		description: __( 'Basic Dynamic Block', 'witsageblocks' ),
		category: 'witsage-blocks',
		icon: {
			background: '#ff0000',
			foreground: '#fafafa',
			// background: '#004752',
			// foreground: '#00d3d8',
			src: icon,
		},
		keywords: [
			__( 'Starter', 'witsageblocks' ),
			__( 'Witsage Dynamic', 'witsageblocks' ),
			__( '', 'witsageblocks' ),
		],
		supports: {
			align: [ 'full' ],
		},


// Get attributes
		attributes,

// Assign block alignment values
		getEditWrapperProps( { blockAlignment } ) {
			if ( 'left' === blockAlignment || 'right' === blockAlignment || 'full' === blockAlignment ) {
				return { 'data-align': blockAlignment };
			}
		},

		edit: props => {

			const {
				attributes: {
					blockVisibility,
					blockContrast,
					textAlignment,
					blockAlignment,
					richMessage
				}, className, setAttributes
			} = props;

			return [

				<InspectorControls>

					<PanelBody
						title={ __( 'Block Styling', 'witsageblocks' ) }
						initialOpen={ true }
					>


						<PanelBody>
							<h3>{ __( "Block Visibility", "witsageblocks" ) }</h3>
							<PanelRow>
								<SelectControl
									// label={__("Block Visibility", "witsageblocks")}
									value={ blockVisibility }
									options={ [
										{ value: 'show-for-all', label: __( "Show on All (default)", "witsageblocks" ) },
										{ value: "show-for-large", label: __( "Hide on Mobile", "witsageblocks" ) },
										{ value: "hide-for-large", label: __( "Hide on Desktop", "witsageblocks" ) },
									] }
									onChange={ blockVisibility => setAttributes( { blockVisibility } ) }
								/>
							</PanelRow>
						</PanelBody>

						<PanelBody>
							<h3>{ __( "Block Contrast", "witsageblocks" ) }</h3>
							<PanelRow>
								<RadioControl
									// label={__("Block Contrast", "witsageblocks")}
									selected={ blockContrast }
									options={ [
										{ label: "Light Block", value: "witsage-block-light" },
										{ label: "Dark Block", value: "witsage-block-dark" }
									] }
									onChange={ blockContrast => setAttributes( { blockContrast } ) }
								/>
							</PanelRow>
						</PanelBody>

						<PanelBody>
							<h3>{ __( "Header Text", "witsageblocks" ) }</h3>
							<PanelRow>
								<PlainText
									onChange={ richMessage => {
										setAttributes( { richMessage } )
									} }
									value={ richMessage }
								/>
							</PanelRow>
						</PanelBody>
					</PanelBody>
					{/*end Block Styling Panel*/ }


				</InspectorControls>,

				<BlockControls>
					<BlockAlignmentToolbar
						value={ blockAlignment }
						onChange={ blockAlignment => setAttributes( { blockAlignment } ) }
					/>
					<AlignmentToolbar
						value={ textAlignment }
						onChange={ textAlignment => setAttributes( { textAlignment } ) }
					/>
				</BlockControls>,


				<div className={ classnames(
					'witsage-element-block',
					className,
					`align${ blockAlignment }`,
					blockContrast,
					blockVisibility,
				) }
						 style={ {
							 textAlign: textAlignment,
						 } }
				>


					<ServerSideRender
						block="witsage-blocks/starter-dynamic-block"
						attributes={ {
							blockVisibility: blockVisibility,
							blockContrast: blockContrast,
							textAlignment: textAlignment,
							blockAlignment: blockAlignment,
							richMessage: richMessage,
						} }
					/>


				</div> /* End of .witsage-element-block */
			];

		},
		save() {
			// Rendering in PHP
			return null;
		},
	} );
