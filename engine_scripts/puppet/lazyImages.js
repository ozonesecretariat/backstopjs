module.exports = async (page, scenario) => {
  // Ensure all images loaded before doing the screenshot
  page.evaluate(async () => {
    document.querySelectorAll('[loading="lazy"]').forEach((element) => {
      element.loading = "eager";
    });

    document.querySelectorAll('[decoding="async"]').forEach((element) => {
      element.decoding = "sync";
    });
  });
};
