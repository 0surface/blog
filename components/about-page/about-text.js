import classes from './about-text.module.css'
import Image from 'next/image'

function AboutText() {
  return (
    <section>
      <div className={classes.about}>
        <p>
          I am full stack developer. I mainly work on full stack web sites, API,
          queues, service workers, tests, packages, CI/CD, loggers, front
          ends... the whole stack. I am interested Ethereum smart contract
          programming, with solidity and the web3 or hardhat frameworks. I am
          well versed in C#, Asp.core but these days I work with react, Next.js
          and node.
        </p>
        <br />
        <p>
          This blog is my attempt to corral my thoughts on programming,
          blockchain, game theory, economics, software design and other
          thoughts.
        </p>
        <br />
        <p>
          I have a few projects on Github, some from a while back, some new. I
          am mostly interested in full stack, self sustaining systems that do
          actual work in the real world. That said most of my work is
          prototypes, introductions, thoughts on their way to actualization.
        </p>

        <div className={classes.image}>
          <Image
            src="/images/site/admin.jpg"
            alt="An Image showing the website adminstrator"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutText
