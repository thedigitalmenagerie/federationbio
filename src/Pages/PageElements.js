import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const HomeContainer = styled.div`
  background: #000000;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

// A (Heading)
export const A = styled.div`
  background: #000000;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10%;
  justify-content: end;
`;

export const Heading = styled.div`
  display: flex;
  color: #ED9F43;
  font-size: 38px;

  @media screen and (max-width: 1160px) {
    font-size: 32px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 28px;
  }

  @media screen and (max-width: 900px) {
    font-size: 24px;
  }

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }

  @media screen and (max-width: 400px) {
    font-size: 12px;
  }

  @media screen and (max-width: 300px) {
    font-size: 8px;
  }

  @media screen and (max-width: 200px) {
    font-size: 6px;
  }
`;

// B

export const B = styled.div`
  background: #000000;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 35%;
`;

// B1 - Left Color Containers
export const B1 = styled.div`
  background: #000000;
  display: flex;
  flex-direction: column;
  width: 10%;
  height: 100%;
  margin-left: 5px;
`;

export const B1A = styled.div`
  background: #CD9DCC;
  display: flex;
  width: 75%;
  height: 70px;
  margin-top: 5px;

  @media screen and (max-width: 900px) {
    height: 305px;
  }
`;

export const B1B = styled.div`
  background: #9A99FF;
  display: flex;
  width: 75%;
  height: 75px;
  margin-top: 5px;

  @media screen and (max-width: 900px) {
    height: 330px;
  }
`;

// B2
export const B2 = styled.div`
  background: #000000;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 150px;
`;

// B2A Right Stack
export const B2A = styled.div`
  background: #000000;
  color: #ED9F43;
  font-size: 8px;
  display: flex;
  flex-direction: row;
  padding-top: 25px;
  width: 75%;
  height: 150px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: 600px;
    width: 75%;
  }
`;

export const B2A1 = styled.div`
  background: #000000;
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
`;

export const B2A2 = styled.div`
  background: #000000;
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
`;

export const B2A3 = styled.div`
  background: #000000;
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
`;

export const B2A4 = styled.div`
  background: #000000;
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
`;

// B2B Far Right Outer Links
export const B2B = styled.div`
  background: #000000;
  display: flex;
  flex-direction: row;
  width: 25%;
  height: 100%;
  align-items: flext-start;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-end;
    height: 600px;
    width: 50%;
    margin-top: 60px;
  }
`;

export const B2B1 = styled.div`
  background: #000000;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-end;
    height: 300px;
    width: 50%;
  }
`;

export const B2B1A = styled.div`
  background: #9A99FF;
  display: flex;
  width: 75%;
  height: 50%;
  border-radius: 30px;
  margin: 10px;

  @media screen and (max-width: 900px) {
    align-items: flex-end;
    height: 75px;
    width: 100%;
    margin: 20px;
  }
`;

export const B2B1B = styled.div`
  background: #FF9835;
  display: flex;
  width: 75%;
  height: 50%;
  border-radius: 30px;
  margin: 10px;

  @media screen and (max-width: 900px) {
    align-items: flex-end;
    height: 75px;
    width: 100%;
    margin: 20px;
  }
`;

export const B2B2 = styled.div`
  background: #000000;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-end;
    height: 400px;
    width: 50%;
  }
`;

export const B2B2A = styled.div`
  background: #CD99FE;
  display: flex;
  width: 75%;
  height: 50%;
  border-radius: 30px;
  margin: 10px;

  @media screen and (max-width: 900px) {
    align-items: flex-end;
    height: 75px;
    width: 100%;
    margin: 20px;
  }
`;

export const B2B2B = styled.div`
  background: #CD6566;
  display: flex;
  width: 75%;
  height: 50%;
  border-radius: 30px;
  margin: 10px;

  @media screen and (max-width: 900px) {
    align-items: flex-end;
    height: 75px;
    width: 100%;
    margin: 20px;
  }
`;

export const C = styled.div`
  background: #000000;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  }
`;

export const C1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const C1A = styled.div`
  width: 96%;
  background: #9A99FF;
  height: 20px;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 0px 0px 0px 15px;
`;

export const C1B = styled.div`
  width: 4%;
  background: #FE9831;
  height: 20px;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const C2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const C2A = styled.div`
  width: 20%;
  background: #D4A1FE;
  height: 20px;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const C2B = styled.div`
  width: 73%;
  background: #D4A1FE;
  height: 20px;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const C2C = styled.div`
  width: 7%;
  background: #CD6566;
  height: 20px;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const D = styled.div`
  background: #000000;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10%;

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const D1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const D1A = styled.div`
  width: 96%;
  background: #CD6566;
  height: 20px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 15px 0px 0px 0px;
`;

export const D1B = styled.div`
  width: 4%;
  background: #FC6637;
  height: 20px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const D2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const D2A = styled.div`
  width: 20%;
  background: #FC6637;
  height: 10px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const D2B = styled.div`
  width: 73%;
  background: #FF32CB;
  height: 20px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const D2C = styled.div`
  width: 7%;
  background: #FC6637;
  height: 20px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const E = styled.div`
  background: #00000;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 35%;
`;

export const E1 = styled.div`
  background: #000000;
  display: flex;
  flex-direction: column;
  width: 10%;
  height: 100%;
  margin-left: 5px;
`;

export const E1A = styled.div`
  background: #CD6566;
  display: flex;
  width: 75%;
  height: 75px;

  @media screen and (max-width: 900px) {
    height: 120px;
  }
`;

export const E1B = styled.div`
  background: #CD6566;
  display: flex;
  width: 75%;
  height: 190px;
  margin-top: 5px;

  @media screen and (max-width: 900px) {
    height: 220px;
  }

`;

export const E1C = styled.div`
  background: #FE9831;
  display: flex;
  width: 75%;
  height: 70px;
  margin-top: 5px;

  @media screen and (max-width: 900px) {
    height: 100px;
  }
`;

export const E1D = styled.div`
  background: #FC6637;
  display: flex;
  width: 75%;
  height: 190px;
  margin-top: 5px;


  @media screen and (max-width: 900px) {
    height: 215px;
  }
`;

export const E2 = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 100%; 
`;
