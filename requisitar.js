async function requisitar(url) {

  // animateStairs();
  document.getElementById('content').innerHTML = '';

  try {
    // await new Promise(resolve => setTimeout(resolve, 1000));

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Requisição finalizada, porém o recurso não foi encontrado. Erro ' + response.status + '.');
    }

    const data = await response.text();
    document.getElementById('content').innerHTML = data;
  } catch (error) {
    document.getElementById('content').innerHTML = error.message;
  } finally {
    // revertAnimation();
  }
}