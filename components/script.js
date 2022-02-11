(function () {
    $(document).on("click", ".history-title", () => {
      $(".history-list").toggle();
      $(".show-all").toggle();

      const title = $(".history-title").text();
      if (title.indexOf("Show") === 0) {
        $(".history-title").text(title.replace("Show", "Hide"));
      } else {
        $(".history-title").text(title.replace("Hide", "Show"));
      }
    });

    window.utils.ensure(".center-block", () => {
      $(".center-block").removeAttr("onclick");
    });
  })();