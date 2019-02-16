<div class="conversion-bar-a" style="position: relative;z-index: 10;"> <!-- Start of .conversion-bar -->

    <div class="content-wrapper">
        <div class="contact-container">

                        <span class="line-1">
                                Call Now!
                            </span>
            <span class="line-2">
                                <?php $business_primary_phone = get_field( 'business_primary_phone', 'option' ); ?>
                        <a href="tel:1<?php echo get_field( 'business_primary_phone', 'option' ); ?>">
					        <?php echo format_phone( $business_primary_phone ); ?>
                        </a>
                            </span>

        </div>
        <div class="separator-container">

        </div>
        <div class="form-container">

            <div class="form-container-header">
                <span class="title">Request Service Online</span>
            </div>
            <div class="form-container-main-content">

				<?php echo FrmFormsController::show_form( $key = 'schedule_service_form_short', $title = false, $description = false ); ?>

            </div>
            <div class="form-container-footer">
                         <span class="privacy">
                            Your privacy is important to us. We will never send you spam.
                         </span>
            </div>

        </div>
    </div>

    <script>

		//Change Button Text for Mobile
		function changeConversionButton() {
			if (window.innerWidth < 768) {

				var buttontext = document.getElementsByClassName("frm_button_submit");
				buttontext[0].innerHTML = "Request Service";

			} else {
				var buttontext = document.getElementsByClassName("frm_button_submit");
				buttontext[0].innerHTML = "Send Request";
			}
		}

		//Initial load
		changeConversionButton();

		//On resize
		window.addEventListener("resize", function () {
			changeConversionButton()
		});

    </script>

</div> <!-- End of .conversion-bar-a -->
