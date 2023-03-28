import Image from 'next/image'
import React from 'react'
import aboutcontent2 from '../../../images/aboutcontent2.jpg'
import aboutcontent1 from '../../../images/aboutcontent1.jpg'
import Link from 'next/link'

function AboutHero() {
  return (
    <>
      <div className="img-box">
        <div>
          <Image
            className="w-full object-cover"
            src="/assets/img/about1.jpg"
            alt="img"
            width={180}
            height={180}
          />
        </div>{' '}
        <div>
          <Image
            className="w-full object-cover"
            src="/assets/img/box-2.png"
            alt="img"
            width={180}
            height={180}
          />
        </div>{' '}
        <div>
          <Image
            className="w-full object-cover"
            src="/assets/img/box3.png"
            alt="img"
            width={180}
            height={180}
          />
        </div>{' '}
        <div>
          <Image
            className="w-full object-cover"
            src="/assets/img/about6.jpg"
            alt="img"
            width={180}
            height={180}
          />
        </div>
      </div>
      <div className="py-30">
        <p className="px-30 heading">
          Interested in bikefitting, endurance sports coaching or nutrition planning?
        </p>{' '}
        <p className="px-30 heading">Look no further!</p>
        <p className="px-30 para">
          I am Alex Coh. I come from Croatia and have been an endurance athlete for nearly 22 years.
          <br />
          <br />
          My journey into a career in bikefitting and coaching was the fact that I went through hell with many
          of my coaches who used standardized preset workouts without regard to actual available training
          time, recovery, fuelling or hydration. This has led to me spending 6 months recovering from
          overtraining where I said enough is enough and started learning about coaching first testing on
          myself, then on friends and family and finally started taking athletes 3 years ago.
          <br />
          <br />I am currently coaching 37 people of various fitness levels in cycling and triathlon ranging
          from beginners to World tour cyclists.
        </p>
      </div>

      <div>
        <Image
          width={400}
          height={200}
          className="w-full object-cover"
          src={aboutcontent1}
          alt="About"
          placeholder="blur"
        />
      </div>
      <div className="py-30 px-30">
        <div>
          <p className="px-30 para">
            {' '}
            It has been a similar story with bikefitting. I had a life threatening accident 6 years ago which
            has caused significant muscle imbalances in the left side of my body affecting my shoulder, hip
            and pelvis. I literally flew off a mountain pass at 70 kmh, hit a tree and landed 40 meters below
            in a meadow. Luckily because of my country boy bones, I only broke my collarbone but as noted in
            the previous sentence, it has affected other parts of my body. <br /> <br />
            Standard bikefitting methods of motion capture systems have caused my on bike comfort to get worse
            and worse until ultimately I decided it´s enough. By that point I have spent about a 1000 eur on
            various “experts” that caused me more and more pain which led to me being unable to ride more than
            20 mins a day. <br />
            <br />
            From that point on I spent about 2 years studying various medical books, and one that has been a
            game changer was a paperback copy of a book published in 1981 by 5 doctors for doctors. It took
            about a year to fully read and understand and during that time I tested what I learned on myself
            and my family. The book was about the human brain, its priorities regarding human posture,
            activity learning and overall biomechanical efficiency. In the year it took me to understand the
            book, I applied what I learned to my own position and things changed dramatically.
          </p>
        </div>
      </div>
      <div className="py-30">
        <Image
          alt="about"
          width={400}
          height={200}
          className="w-full object-cover"
          src={aboutcontent2}
          placeholder="blur"
        />
        <div className="px-30 para">
          <p>
            I learned to correct the imbalances caused by deactivated muscles, to increase information flow in
            the body and optimize activity learning leading to a much better overall efficiency of the
            activity in question. When I was done with my position, I started applying things to friends and
            family again and the feedback was very good. This has led me to start taking on clients and doing
            bikefitting as a career.
            <br /> <br />
            As a comparison, currently, you can receive a bikefitting degree in one to two days/mornings of
            pressing buttons on a software system of your choice and you can start doing bikefitting. Scary,
            isn´t it? Bikefitting is a passion and no two people are the same, therefore only the principles
            remain the same, but the way you get to a result is always different. Our brain and understanding
            its basic functions is the key to get a good position on the bike, a good running posture and
            efficient swimming technique. Without the knowledge, you simply can’t get a satisfactory result.
            <br /> <br />
            Because of my experience with the other bikefitters I have also decided to offer money back
            guarantee to all my clients. This is for several reasons: <br />
          </p>
          <ol>
            <li>
              I want everyone who comes to me to feel safe knowing they will get a result for their hard
              earned money. YOU SHOULD NOT PAY FOR ANYONE`S ATTEMPTS at resolving your positional problems.
              Only results matter.
            </li>
            <li>
              When your income is directly linked to your client´s happiness, you are always 100 percent
              focused. I wanted to keep myself accountable.
            </li>
          </ol>
          <p>Feel free to contact me on Whatsapp or e-mail – happy to have a chat.</p>
          <Link passHref href={'/contact'} className="get-in-touch-style">
            Get in touch
          </Link>
        </div>
      </div>
    </>
  )
}

export default AboutHero
