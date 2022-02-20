import classes from './about-text.module.css'
import Image from 'next/image'

function AboutText() {
  return (
    <section className={classes.about}>
      <div className={classes.portfolio}>
        <div className={classes.excerpt}>
          <h1>About me ...</h1>
          <p>
            I am full stack developer. I mainly work on full stack web sites,
            API, queues, service workers, tests, packages, CI/CD, loggers, front
            ends... the whole stack. I am interested Ethereum smart contract
            programming, with solidity and the web3 or hardhat frameworks. I am
            well versed in C#, Asp.core but these days I work with react,
            Next.js and node.
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
        </div>
        <div className={classes.projectCards}>
          <div></div>
        </div>
      </div>
      <div className={classes.dashboard}>
        <div className={classes.user}>
          <div className={classes.image}>
            <Image
              src="/images/site/admin.jpg"
              alt=""
              width={300}
              height={300}
            />
          </div>
          <h4>It is I</h4>
          <h5>The Entity, the myth, the legend</h5>
        </div>
        <div className={classes.socials}>
          <div className={classes.links}>
            <Image
              src="/images/site/github.png"
              alt=""
              width={30}
              height={30}
            />
            <h5>Github</h5>
          </div>
          <div className={classes.links}>
            <Image
              src="/images/site/twitter.png"
              alt=""
              width={30}
              height={30}
            />
            <h5>Twitter</h5>
          </div>
          <div className={classes.links}>
            <Image src="/images/site/admin.jpg" alt="" width={30} height={30} />
            <h3>Substack</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutText
