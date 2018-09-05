(function() {
    function customScript() {
        // Plugin boilerplate
        $.fn.accordion = function() {
            var $container = this;
            var $primaryContent = $container.children('.content-primary');
            var $secondaryContent = $container.children('.content-secondary');
            var $primaryButton = $container.children('.action-primary');
            var $secondaryButton = $container.children('.action-secondary');
        
            $primaryContent.hide();
            $secondaryContent.hide();
        
            $primaryButton.click(function() {
            $secondaryContent.hide();
            $primaryContent.show();
            });
        
            $secondaryButton.click(function() {
            $primaryContent.hide();
            $secondaryContent.show();
            });
        };
        // Init accordian plugin for content on page
        $('.collapsible-content').each(function() {
            $(this).accordion();
            console.log('hey');
        });
    }
      if (window.addEventListener) {
        window.addEventListener("load",customScript,false);
      } else if (window.attachEvent) {
        window.attachEvent("onload",customScript);
      }
})()

