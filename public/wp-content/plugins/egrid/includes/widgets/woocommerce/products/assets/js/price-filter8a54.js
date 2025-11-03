(function($) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */
    var WidgetEGridProductsPriceFilterHandler = function($scope, $) {
        if (typeof egrid_price_filter_params === 'undefined') {
            return false;
        }

        let wrapper = $scope.find('.egrid-products-wrapper');

        wrapper.on('price_slider_create price_slider_slide', function(event, min, max) {

            wrapper.find('.price_slider_amount span.from').html(accounting.formatMoney(min, {
                symbol: egrid_price_filter_params.currency_format_symbol,
                decimal: egrid_price_filter_params.currency_format_decimal_sep,
                thousand: egrid_price_filter_params.currency_format_thousand_sep,
                precision: egrid_price_filter_params.currency_format_num_decimals,
                format: egrid_price_filter_params.currency_format
            }));

            wrapper.find('.price_slider_amount span.to').html(accounting.formatMoney(max, {
                symbol: egrid_price_filter_params.currency_format_symbol,
                decimal: egrid_price_filter_params.currency_format_decimal_sep,
                thousand: egrid_price_filter_params.currency_format_thousand_sep,
                precision: egrid_price_filter_params.currency_format_num_decimals,
                format: egrid_price_filter_params.currency_format
            }));

            wrapper.trigger('price_slider_updated', [min, max]);
        });

        function init_price_filter() {
            wrapper.find('input#min_price, input#max_price').hide();
            wrapper.find('.price_slider, .price_label').show();

            var min_price = wrapper.find('.price_slider_amount #min_price').data('min'),
                max_price = wrapper.find('.price_slider_amount #max_price').data('max'),
                step = wrapper.find('.price_slider_amount').data('step') || 1,
                current_min_price = wrapper.find('.price_slider_amount #min_price').val(),
                current_max_price = wrapper.find('.price_slider_amount #max_price').val()
                timer = 0;

            wrapper.find('.price_slider:not(.ui-slider)').slider({
                range: true,
                animate: true,
                min: min_price,
                max: max_price,
                step: step,
                values: [current_min_price, current_max_price],
                create: function() {
                    wrapper.find('.price_slider_amount #min_price').val(current_min_price);
                    wrapper.find('.price_slider_amount #max_price').val(current_max_price);

                    wrapper.trigger('price_slider_create', [current_min_price, current_max_price]);
                },
                slide: function(event, ui) {
                    wrapper.find('input#min_price').val(ui.values[0]);
                    wrapper.find('input#max_price').val(ui.values[1]);

                    wrapper.trigger('price_slider_slide', [ui.values[0], ui.values[1]]);
                },
                change: function(event, ui) {
                    wrapper.trigger('price_slider_change', [ui.values[0], ui.values[1]]);

                    if(timer){
                        clearTimeout(timer); 
                    }
                    timer = setTimeout(function () {
                        var filters = $scope.data('filters') || {};
                        var prices = filters.prices || {};
                        prices.min_price = wrapper.find('input#min_price').val();
                        prices.max_price = wrapper.find('input#max_price').val();
                        filters.prices = prices;
                        $scope.data('filters', filters);
                        $scope.data('page', 1);
                        $scope.trigger('load');
                    }, 500);
                }
            });
        }

        init_price_filter();
        wrapper.on('init_price_filter', init_price_filter);

        var els = wrapper.find('.egrid-products-price-filter [type=submit]');
        if(els.length == 0){
            var widgetId = $scope.data('id');
            els = $('#egrid-products-filters-' + widgetId).find('.egrid-products-price-filter [type=submit]');
        }

        els.on('click', function () {
            var filters = $scope.data('filters') || {};
            var prices = filters.prices || {};
            prices.min_price = wrapper.find('input#min_price').val();
            prices.max_price = wrapper.find('input#max_price').val();
            filters.prices = prices;
            $scope.data('filters', filters);
            $scope.data('page', 1);
            $scope.trigger('load');

            return false;
        });
    };

    // Make sure you run this code under Elementor.
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/egrid-products.default', WidgetEGridProductsPriceFilterHandler);
    });
})(jQuery);