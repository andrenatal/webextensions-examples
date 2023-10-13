onmessage = async (e) => {
    // just retreive a random number and a timestamp from random.org
    const response = await fetch("https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new&cl=w");
    let random = await response.text();
    random = random.replace(/(<([^>]+)>)/gi, "");
    postMessage(random);
};

