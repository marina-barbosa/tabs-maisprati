

async function handleLinkClick(url, element) {
  toggleTab(element);
  animateStairs();
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    requisitar(url)
  } catch (error) {
    console.error(error);
  } finally {
    revertAnimation();
  }
  toggleBackgroundColor(element);
}
