/**
 * WitSage Starter Layout BLock
 *
 * @TODO Code splitting for Attributes. Inspector and Controls. Scheme TBD
 * @TODO attribute values set by functions not by controls.
 * @TODO Cleanup naming - img to backgroundimage etc.
 * @TODO get flex layout working in editor.
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
import icons from "../../resources/icons";
import block_builders from '../../resources/block_structures/witsage-block-builders';
import block_content from '../../resources/block_structures/witsage-block-content';

// Code Splitting
import attributes from '../../resources/shared_attrubutes/witage-layout-block-attributes';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const {
	AlignmentToolbar,
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
	ColorPalette,
	MediaUpload,
	InnerBlocks
} = wp.editor;

const {
	Button,
	PanelBody,
	PanelRow,
	RadioControl,
	RangeControl,
	SelectControl,
} = wp.components;


/**
 * Register block
 */
export default registerBlockType(
	'witsage-blocks/starter-layout-block',
	{
		title: __( 'WS Starter Layout Block' ),
		description: __( 'Wrapper for other blocks', 'witsageblocks' ),
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
			__( 'Layout Structure', 'witsageblocks' ),
			__( 'Witsage', 'witsageblocks' ),
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
					blockBackgroundColor,
					blockVisibility,
					blockParallax,
					blockContrast,
					textAlignment,
					blockAlignment,
					blockDebugMode,
					blockOverlayType,
					blockContentPadding,
					blockContentDisplay,
					backgroundImgID, backgroundImgURL, backgroundImgALT
				}, className, setAttributes, isSelected
			} = props;

			const onSelectImage = img => {
				setAttributes( {
					backgroundImgID: img.id,
					backgroundImgURL: img.url,
				} );
			};
			const onRemoveImage = () => {
				setAttributes( {
					backgroundImgID: null,
					backgroundImgURL: null,
				} );
			};


			return [

				<InspectorControls>

					<PanelBody
						title={ __( 'Block Styling', 'witsageblocks' ) }
						initialOpen={ true }
					>

						<PanelBody>
							<h3>{ __( "Background Color", "witsageblocks" ) }</h3>

							<ColorPalette
								value={ blockBackgroundColor }
								onChange={ blockBackgroundColor => {
									setAttributes( { blockBackgroundColor } );
								} }
							/>
						</PanelBody>


						<PanelBody>
							<h3>{ __( "Background Image", "witsageblocks" ) }</h3>
							{ ! backgroundImgID ? (

								<MediaUpload
									onSelect={ onSelectImage }
									type="image"
									value={ backgroundImgID }
									render={ ( { open } ) => (
										<Button
											className={ "button button-large" }
											onClick={ open }
										>
											{ icons.upload }
											{ __( ' Upload Image', 'witsageblocks' ) }
										</Button>
									) }
								>
								</MediaUpload>

							) : (

								<p class="image-wrapper">
									<img
										src={ backgroundImgURL }
										alt={ backgroundImgALT }
									/>

									{ isSelected ? (

										<Button
											className="remove-image"
											onClick={ onRemoveImage }
										>
											{ icons.remove }
										</Button>

									) : null }

								</p>
							) }

						</PanelBody>

						<PanelBody>
							<h3>{ __( "Background Overlay", "witsageblocks" ) }</h3>
							<PanelRow>
								<SelectControl
									// label={__("Background Overlay", "witsageblocks")}
									help={ __( "For when there is a background image, but can be used with a background color", "witsageblocks" ) }
									value={ blockOverlayType }
									options={ [
										{ value: "overlay-none", label: __( "No Overlay", "witsageblocks" ) },
										{ value: "overlay-style-one", label: __( "Style 1", "witsageblocks" ) },
										{ value: "overlay-style-two", label: __( "Style 2", "witsageblocks" ) },
										{ value: "overlay-style-three", label: __( "Style 3", "witsageblocks" ) },
										{ value: "overlay-style-four", label: __( "Style 4", "witsageblocks" ) },
										{ value: "overlay-style-five", label: __( "Style 5", "witsageblocks" ) },
										{ value: "overlay-style-six", label: __( "Style 6", "witsageblocks" ) }
									] }
									onChange={ blockOverlayType => setAttributes( { blockOverlayType } ) }
								/>
							</PanelRow>
						</PanelBody>

						<PanelBody>
							<h3>{ __( "Content Padding", "witsageblocks" ) }</h3>
							<p>{ __( "Spacing above and below content as percentage of browser width. (VW)", "witsageblocks" ) } </p>
							<PanelRow>
								<RangeControl
									beforeIcon="arrow-left-alt2"
									afterIcon="arrow-right-alt2"
									allowReset="true"
									// label={__("Range Control", "witsageblocks")}
									value={ blockContentPadding }
									onChange={ blockContentPadding => setAttributes( { blockContentPadding } ) }
									min={ 0 }
									max={ 50 }
								/>
							</PanelRow>
						</PanelBody>

						<PanelBody>
							<h3>{ __( "Block Display Type", "witsageblocks" ) }</h3>
							<PanelRow>
								<SelectControl
									// label={__("Block Visibility", "witsageblocks")}
									value={ blockContentDisplay }
									options={ [
										{ value: 'block', label: __( "Block (default)", "witsageblocks" ) },
										{ value: "flex", label: __( "Flex", "witsageblocks" ) },
									] }
									onChange={ blockContentDisplay => setAttributes( { blockContentDisplay } ) }
								/>
							</PanelRow>
						</PanelBody>

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
							<h3>{ __( "Parallax Effect", "witsageblocks" ) }</h3>
							<PanelRow>
								<RadioControl
									selected={ blockParallax }
									options={ [
										{ label: "Regular", value: "scroll" },
										{ label: "Parallax", value: "fixed" },

									] }
									onChange={ blockParallax => setAttributes( { blockParallax } ) }
								/>
							</PanelRow>
						</PanelBody>

						<PanelBody>
							<h3>{ __( "Debug Mode", "witsageblocks" ) }</h3>
							<PanelRow>
								<RadioControl
									label={ __( "Debug Mode", "witsageblocks" ) }
									selected={ blockDebugMode }
									options={ [
										{ label: "Off", value: "none" },
										{ label: "On", value: "block" },
									] }
									onChange={ blockDebugMode => setAttributes( { blockDebugMode } ) }
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
					'witsage-block',
					className,
					`align${ blockAlignment }`,
					blockOverlayType,
					blockContrast,
					blockVisibility,
				) }
						 style={ {
							 textAlign: textAlignment,
							 backgroundColor: blockBackgroundColor,
							 backgroundAttachment: blockParallax,
							 backgroundImage: ! backgroundImgID ? ( null ) : ( `url(${ backgroundImgURL })` )
						 } }
				>


					{ block_builders.starter(
						{
							className: className,
							blockContent: block_content.inner(
								{
									className: className,
									blockContentPadding: blockContentPadding,
									// blockContentDisplay: blockContentDisplay
								}
							)
						}
					)
					}
				</div> /* End of .witsage-block */

				//	Dynamic Styles for Editor


			];


		},
		save: props => {
			const {
				attributes: {
					blockBackgroundColor,
					blockVisibility,
					blockParallax,
					blockContrast,
					textAlignment,
					blockAlignment,
					blockOverlayType,
					backgroundImgID,
					backgroundImgURL,
					blockContentPadding,
					blockContentDisplay
				}, className, setAttributes
			} = props;

			const blockclassName = 'wp-block-witsage-starter-block';

			// Return null for dynamic blocks and/or debugging
			// return null;

			return (

				<div className={ classnames(
					'witsage-block',
					className,
					`align${ blockAlignment }`,
					blockOverlayType,
					blockContrast,
					blockVisibility,
				) }
						 style={ {
							 textAlign: textAlignment,
							 backgroundColor: blockBackgroundColor,
							 backgroundAttachment: blockParallax,
							 backgroundImage: ! backgroundImgID ? ( null ) : ( `url(${ backgroundImgURL })` )
						 } }
				>

					{ block_builders.starter(
						{
							className: blockclassName,

							blockContent: block_content.innerSave(
								{
									className: blockclassName,
									blockContentPadding: blockContentPadding,
									blockContentDisplay: blockContentDisplay
								}
							)
						}
					)
					}

				</div>

			);
		},
	},
);
