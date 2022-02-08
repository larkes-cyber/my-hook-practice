class Service{
    _apiUrl="https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new";
    request=async()=>{
        const data = await fetch(this._apiUrl);
        if(!data.ok){
            throw new Error(`Could not fetch ${this._apiUrl}`);
        }
        else{
            return await data.text();
        }
    }
    getRandomNum=async()=>{
        const data = await this.request();
        return await data;
    }
}
export default Service;