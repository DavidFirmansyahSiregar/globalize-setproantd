import Globalize from "globalize";

(function($) {

    $.when(
  
      $.getJSON( 'js/vendor/cldr/en/ca-gregorian.json' ),
  
      $.getJSON( 'js/vendor/cldr/en/currencies.json' ),
  
      $.getJSON( 'js/vendor/cldr/en/numbers.json' ),
  
      $.getJSON( 'js/vendor/cldr/en/units.json' ),
  
      $.getJSON( 'js/vendor/cldr/supplemental/plurals.json' ),
  
      $.getJSON( 'js/vendor/cldr/supplemental/timeData.json' ),
  
      $.getJSON( 'js/vendor/cldr/supplemental/weekData.json' ),
  
      $.getJSON( 'js/vendor/cldr/supplemental/likelySubtags.json' )
  
    ).then(function() {
  
      // Normalize $.get results, we only need the JSON, not the request statuses.
  
      return [].slice.apply( arguments, [ 0 ] ).map(function( result ) {
  
        return result[ 0 ];
  
      });
  
      // eslint-disable-next-line no-undef
  
    }).then( Globalize.load ).then(function() {
  
    });
  
  // eslint-disable-next-line no-undef
  
  }(jQuery));