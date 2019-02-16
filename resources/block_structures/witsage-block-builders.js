import classnames from "classnames";

const block_builders = {};

block_builders.starter = props => (

	<div className={ classnames( 'witsage-block-outer', `${ props.className }-witsage-block-outer`, ) }>
		<div className={ classnames( 'witsage-block-background-overlay', `${ props.className }-witsage-block-outer`, ) }>
			<div className={ classnames( 'witsage-block-content-wrapper', `${ props.className }-witsage-block-outer`, ) }>

				{ props.blockContent }


			</div>
			{/* End of .witsage-block-content-wrapper */ }
		</div>
		{/* End of .witsage-block-background-overlay */ }
	</div>/* End of .witsage-block */

);

export default block_builders;
