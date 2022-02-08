import Image from 'next/image'

import classes from './hero.module.css'

function Hero(props) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/admin.jpg"
          alt="An Image showing the website adminstrator"
          width={300}
          height={300}
        />
      </div>
      <h1>Welcome</h1>
      <p>
        I blog about Development - especially the Ethereum ecosystem, explore
        new ideas and smart contract development
      </p>
    </section>
  )
}

export default Hero
