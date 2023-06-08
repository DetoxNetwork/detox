  AOS.init({
  delay: 150,
  mirror: true
	});

	document.querySelectorAll('img')
    .forEach((img) =>
        img.addEventListener('load', () =>
            AOS.refresh()
        )
    );

new fullpage('#fullpage', {
  autoScrolling: true,
  scrollHorizontally: false,
  navigation: false,
  showActiveTooltip: false,
  slidesNavigation: false,
  scrollBar: true,
  lazyLoading: false
});