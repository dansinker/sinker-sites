(function($){
	$.fn.jTruncate = function(options) {
	   
		var defaults = {
			length: 300,
			minTrail: 20,
			moreText: "more",
			lessText: "less",
			ellipsisText: "...",
			moreAni: "",
			lessAni: ""
		};
		
		var options = $.extend(defaults, options);
	   
		return this.each(function() {
			obj = $(this);
			var body = obj.html();
			
			if(body.length > options.length + options.minTrail) {
				var splitLocation = body.indexOf(' ', options.length);
				if(splitLocation != -1) {
					// truncate tip
					var splitLocation = body.indexOf(' ', options.length);
					var str1 = body.substring(0, splitLocation);
					var str2 = body.substring(splitLocation, body.length - 1);
					obj.html(str1 + '<span class="truncate_ellipsis">' + options.ellipsisText + 
						'</span>' + '<span class="truncate_more">' + str2 + '</span>');
					obj.find('.truncate_more').css("display", "none");
					
					// insert more link
					obj.append(
						'<div class="clearboth">' +
							'<a href="#" class="truncate_more_link">' + options.moreText + '</a>' +
						'</div>'
					);

					// set onclick event for more/less link
					var moreLink = $('.truncate_more_link', obj);
					var moreContent = $('.truncate_more', obj);
					var ellipsis = $('.truncate_ellipsis', obj);
					moreLink.click(function() {
						if(moreLink.text() == options.moreText) {
							moreContent.show(options.moreAni);
							moreLink.text(options.lessText);
							ellipsis.css("display", "none");
						} else {
							moreContent.hide(options.lessAni);
							moreLink.text(options.moreText);
							ellipsis.css("display", "inline");
						}
						return false;
				  	});
				}
			} // end if
			
		});
	};
})(jQuery);

/* jQuery.CuteTime v 1.1.3 (4/6/2010) http://tpgblog.com/cutetime/
compiled by http://yui.2clics.net/ */
(function(f){var b=Number.NEGATIVE_INFINITY;var d=Number.POSITIVE_INFINITY;var a="data-timestamp";f.fn.cuteTime=function(n){var m=new Date().getTime();var o;var p;if((typeof n=="object")||(n==undefined)){f.fn.cuteTime.c_settings=f.extend({},f.fn.cuteTime.settings,n);f.fn.cuteTime.the_selected=this;this.each(function(){p=f(this);o=j(p);p.html(c(m-o))});f.fn.cuteTime.start_cuteness()}return this};f.cuteTime=function(n,q){var m=new Date().getTime();var p;var r;var o=null;if(typeof n=="object"){f.fn.cuteTime.c_settings=f.extend({},f.fn.cuteTime.settings,n)}if(typeof n=="string"){o=n}else{if(typeof q=="string"){o=q}}if(o!=null){p=l(o);if(!isNaN(p)){return c(m-p)}else{return"INVALID_DATETIME_FORMAT"}}return this};f.fn.cuteTime.settings={refresh:-1,time_ranges:[{bound:b,cuteness:"the future!",unit_size:0},{bound:0,cuteness:"just&nbsp;now",unit_size:0},{bound:20*1000,cuteness:"a&nbsp;few&nbsp;seconds&nbsp;ago",unit_size:0},{bound:60*1000,cuteness:"a&nbsp;minute&nbsp;ago",unit_size:0},{bound:60*1000*2,cuteness:"&nbsp;minutes&nbsp;ago",unit_size:60*1000},{bound:60*1000*60,cuteness:"an&nbsp;hour&nbsp;ago",unit_size:0},{bound:60*1000*60*2,cuteness:"&nbsp;hours&nbsp;ago",unit_size:60*1000*60},{bound:60*1000*60*24,cuteness:"yesterday",unit_size:0},{bound:60*1000*60*24*2,cuteness:" days ago",unit_size:60*1000*60*24},{bound:60*1000*60*24*30,cuteness:"last month",unit_size:0},{bound:60*1000*60*24*30*2,cuteness:" months ago",unit_size:60*1000*60*24*30},{bound:60*1000*60*24*30*12,cuteness:"last year",unit_size:0},{bound:60*1000*60*24*30*12*2,cuteness:" years ago",unit_size:60*1000*60*24*30*12},{bound:d,cuteness:"a blinkle ago",unit_size:0}]};f.fn.cuteTime.start_cuteness=function(){var m=f.fn.cuteTime.c_settings.refresh;if(f.fn.cuteTime.process_tracker==null){if(m>0){f.fn.cuteTime.process_tracker=setInterval("$.fn.cuteTime.update_cuteness()",m)}}else{}return this};f.fn.cuteTime.update_cuteness=function(){var m=new Date().getTime();var o;var n;f.fn.cuteTime.the_selected.each(function(){o=f(this);n=j(o);o.html(c(m-n))})};f.fn.cuteTime.stop_cuteness=function(){if(f.fn.cuteTime.process_tracker!=null){clearInterval(f.fn.cuteTime.process_tracker);f.fn.cuteTime.process_tracker=null}else{}return this};function c(q){var o=f.fn.cuteTime.c_settings.time_ranges;var n,p;var m="";jQuery.each(o,function(r,s){if(r<o.length-1){if((q>=s.bound)&&(q<o[r+1]["bound"])){if(s.unit_size>0){p=Math.floor(q/s.unit_size)}else{p=""}n=s.cuteness.replace(/%CT%/,p);if(n==s.cuteness){m=p+s.cuteness}else{m=n}return false}}else{return false}});if(m==""){m="2 pookies ago"}return m}function l(n){var m;if((new_date=g(n))!=null){m=new_date.valueOf()}else{m=(new Date(n)).valueOf();if(isNaN(m)){m=new Date(n.replace(/-/g," "))}}return m}function g(q){var m=q.match(/^(\d{4})((-(\d{2})(-(\d{2})(T(\d{2}):(\d{2})(:(\d{2})(.(\d+))?)?(Z|(([+-])((\d{2}):(\d{2})))))?)?)?)$/);if(m!=null){var n=new Date();var p=0;var o=0;n.setUTCFullYear(m[1]);if(!e(m[4])){n.setUTCMonth(m[4]-1);if(!e(m[6])){n.setUTCDate(m[6]);if(!e(m[16])){p=m[18];o=m[19];if(m[16]=="-"){p*=-1;o*=-1}}if(!e(m[8])){n.setUTCHours(m[8]-p);n.setUTCMinutes(m[9]-o);if(!e(m[11])){n.setUTCSeconds(m[11]);if(!e(m[13])){n.setUTCMilliseconds(m[13]*1000)}}}}}return n}else{return null}}function e(m){if(null==m||""==m){return true}return false}function j(o){var n=Number.NaN;var m=h(o);if(m!=null){n=l(m)}if(isNaN(n)){m=i(o);if(m!=null){n=l(m)}}if(isNaN(n)){m=new Date().toString();n=l(m)}k(m,o);return n}function h(n){var m=n.attr(a);if(m!=undefined){return m}else{return null}}function k(m,n){n.attr(a,m)}function i(m){return m.text()}})(jQuery);

/*!
 * jQuery replaceText - v1.1 - 11/21/2009
 * http://benalman.com/projects/jquery-replacetext-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery replaceText: String replace for your jQueries!
//
// *Version: 1.1, Last updated: 11/21/2009*
// 
// Project Home - http://benalman.com/projects/jquery-replacetext-plugin/
// GitHub       - http://github.com/cowboy/jquery-replacetext/
// Source       - http://github.com/cowboy/jquery-replacetext/raw/master/jquery.ba-replacetext.js
// (Minified)   - http://github.com/cowboy/jquery-replacetext/raw/master/jquery.ba-replacetext.min.js (0.5kb)
// 
// About: License
// 
// Copyright (c) 2009 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// This working example, complete with fully commented code, illustrates one way
// in which this plugin can be used.
// 
// replaceText - http://benalman.com/code/projects/jquery-replacetext/examples/replacetext/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, and what browsers it has been tested in.
// 
// jQuery Versions - 1.3.2, 1.4.1
// Browsers Tested - Internet Explorer 6-8, Firefox 2-3.6, Safari 3-4, Chrome, Opera 9.6-10.1.
// 
// About: Release History
// 
// 1.1 - (11/21/2009) Simplified the code and API substantially.
// 1.0 - (11/21/2009) Initial release

(function($){
  '$:nomunge'; // Used by YUI compressor.
  
  // Method: jQuery.fn.replaceText
  // 
  // Replace text in specified elements. Note that only text content will be
  // modified, leaving all tags and attributes untouched. The new text can be
  // either text or HTML.
  // 
  // Uses the String prototype replace method, full documentation on that method
  // can be found here: 
  // 
  // https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Objects/String/Replace
  // 
  // Usage:
  // 
  // > jQuery('selector').replaceText( search, replace [, text_only ] );
  // 
  // Arguments:
  // 
  //  search - (RegExp|String) A RegExp object or substring to be replaced.
  //    Because the String prototype replace method is used internally, this
  //    argument should be specified accordingly.
  //  replace - (String|Function) The String that replaces the substring received
  //    from the search argument, or a function to be invoked to create the new
  //    substring. Because the String prototype replace method is used internally,
  //    this argument should be specified accordingly.
  //  text_only - (Boolean) If true, any HTML will be rendered as text. Defaults
  //    to false.
  // 
  // Returns:
  // 
  //  (jQuery) The initial jQuery collection of elements.
  
  $.fn.replaceText = function( search, replace, text_only ) {
    return this.each(function(){
      var node = this.firstChild,
        val,
        new_val,
        
        // Elements to be removed at the end.
        remove = [];
      
      // Only continue if firstChild exists.
      if ( node ) {
        
        // Loop over all childNodes.
        do {
          
          // Only process text nodes.
          if ( node.nodeType === 3 ) {
            
            // The original node value.
            val = node.nodeValue;
            
            // The new value.
            new_val = val.replace( search, replace );
            
            // Only replace text if the new value is actually different!
            if ( new_val !== val ) {
              
              if ( !text_only && /</.test( new_val ) ) {
                // The new value contains HTML, set it in a slower but far more
                // robust way.
                $(node).before( new_val );
                
                // Don't remove the node yet, or the loop will lose its place.
                remove.push( node );
              } else {
                // The new value contains no HTML, so it can be set in this
                // very fast, simple way.
                node.nodeValue = new_val;
              }
            }
          }
          
        } while ( node = node.nextSibling );
      }
      
      // Time to remove those elements!
      remove.length && $(remove).remove();
    });
  };  
  
})(jQuery);
