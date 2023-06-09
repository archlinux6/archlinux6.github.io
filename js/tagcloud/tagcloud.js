function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function () {
      oldonload();
      func();
    };
  }
}

addLoadEvent(function () {
  console.log("加载标签云...");
  let tagcloud = echarts.init(document.getElementById("card-tag-cloud"));
  tagcloud.setOption({
    tooltip: {},
    series: [
      {
        rotationRange: [-90, 90],

        drawOutOfBound: false,
        autoSize: {
          enable: true,
          minSize: 6,
        },
        left: "center",
        top: "center",
        width: "100%",
        height: "100%",
        right: null,
        bottom: null,
        textStyle: {
          normal: {
            color: function () {
              return (
                "rgb(" +
                [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                ].join(",") +
                ")"
              );
            },
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: "#333",
          },
        },
        type: "wordCloud",
        gridSize: 2,
        sizeRange: [12, 50],
        data: [{"name":"GIT","permalink":"http://example.com/tags/GIT/","value":1},{"name":"HEXO","permalink":"http://example.com/tags/HEXO/","value":1}],
      },
    ],
  });

  tagcloud.on("click", function (e) {
    location.href = e.data.permalink;
  });
});
