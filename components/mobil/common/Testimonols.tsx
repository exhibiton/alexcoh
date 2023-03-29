import Image from 'next/image'
import React, { useState } from 'react'
import rob from '../../../images/rob.jpg'
import robson from '../../../images/robson.jpg'
import matthias from '../../../images/matthias.jpg'
import david from '../../../images/david.jpg'
import anu from '../../../images/anu.jpg'
import tim from '../../../images/tim.jpg'
import chris from '../../../images/chris.jpg'
import michael from '../../../images/michael.jpg'
import juhana from '../../../images/juhana.jpg'
import katariina from '../../../images/katariina.jpg'
import james from '../../../images/james.jpg'
import markus from '../../../images/markus.jpg'

function Testimonols() {
  const [isShowRobText, setShowRobText] = useState(false)
  const [isShowRobsonText, setShowRobsonText] = useState(false)
  const [isShowMatthiasText, setShowMatthiasText] = useState(false)
  const [isShowDavidText, setShowDavidText] = useState(false)
  const [isShowAnuText, setShowAnuText] = useState(false)
  const [isShowTimText, setShowTimText] = useState(false)
  const [isShowMichaelText, setShowMichaelText] = useState(false)
  const [isShowChrisText, setShowChrisaText] = useState(false)
  const [isShowJuhanaText, setShowJuhanaText] = useState(false)
  const [isShowKatariinaText, setShowKatariinaText] = useState(false)
  const [isShowJamesText, setShowJamesText] = useState(false)
  const [isShowMarkusText, setShowMarkusText] = useState(false)

  return (
    <>
      {/* TESTIMONIAL ITEM  */}
      <div className="prfile">
        <Image width={120} height={120} src={rob} alt="img" className="filter-gray" />
        <h1 className="heading px-30">Rob</h1>
        {isShowRobText ? (
          <div>
            <p className="para px-30">
              Alex is quite simply the best that you can get. He’s transformed my attitude and nutrition as
              well as my fitness. He’s endlessly encouraging, always has time and judges exactly what’s
              needed. I’ve achieved things with Alex that I wouldn’t have thought were possible.
            </p>
            <p className="para px-30">
              Trust is probably the keyword. Alex works hard at this. After a while you begin to trust that
              Alex knows your limits and whatever he sets, while it might look insurmountable, is possible if
              you get your mindset right. I’m still not quite sure how I completed a few of the training
              sessions.
            </p>
            <p className="para px-30">
              The training feels, and is, truly personalised. Alex listens carefully to feedback and tweaks my
              training plan sometimes more than once a week. I suppose the simplest way of putting it is Alex
              recognises everyone is human, sometimes they want to go off the plan, sometimes they don’t feel
              right, and he adjusts constantly.
            </p>
            <p className="para px-30">
              Everything is designed to maximise your potential and use of time. I’ve seen major results,
              raising by FTP 20w in 4 months, raising my cycling efficiency closer to 10% and feeling stronger
              and fitter than I ever had before. The biggest change I’ve seen through working with Alex is
              mental rather than physical. He’s helped me build confidence to attack training sessions and
              races.
            </p>
          </div>
        ) : (
          <p className="para px-30">
            Alex is quite simply the best that you can get. He’s transformed my attitude and nutrition as well
            as my...{' '}
          </p>
        )}

        <div className="px-30 ">
          <button onClick={() => setShowRobText(!isShowRobText)} className="more-btn">
            {isShowRobText ? 'LESS' : 'MORE'}
          </button>
        </div>
      </div>
      {/* TESTIMONIAL ITEM  */}
      <div className="prfile" style={{ marginTop: '60px' }}>
        <Image width={120} height={120} src={robson} alt="img" className="filter-gray" />
        <h1 className="heading px-30">Robson Lindberg</h1>
        {isShowRobsonText ? (
          <div>
            <p className="para px-30">
              I’ve known Alex for 2 years. We share a curiosity that isn’t common. In Alex case, his passion
              is his fortitude. If he doesn’t know something, he sees it as a challenge. Alex has helped me
              understand my nutritional needs. I’ve been an athlete all my life and thought I had this area
              squared away. I couldn’t have been more wrong. With Alex everything is based on science and then
              through discussion and meticulous testing tailored for you. Test, analyze, repeat.
            </p>
            <p className="para px-30">
              The more information you can give Alex, the more he can work with. And he works his ass off. For
              so long I was executing my workouts to perfection. However, I put diesel in a Ferrari. And you
              never put diesel in a Ferrari. I’ve made quantum leaps during the time we’ve worked together.
              Why aren’t you working with Alex?
            </p>
          </div>
        ) : (
          <p className="para px-30">
            I’ve known Alex for 2 years. We share a curiosity that isn’t common. In Alex case, his passion is
            his fortitude...{' '}
          </p>
        )}

        <div className="px-30 ">
          <button onClick={() => setShowRobsonText(!isShowRobsonText)} className="more-btn">
            {isShowRobsonText ? 'LESS' : 'MORE'}
          </button>
        </div>
      </div>
      {/* TESTIMONIAL ITEM  */}
      <div className="prfile" style={{ marginTop: '60px' }}>
        <Image width={120} height={120} src={matthias} alt="matthias" className="filter-gray" />
        <h1 className="heading px-30">Matthias Petry</h1>
        {isShowMatthiasText ? (
          <div>
            <p className="para px-30">
              Alex is the best thing that could have happened to me, he’s not just a trainer, no, he lives
              this job 100%. I was really in a very difficult sporting phase, totally in training and then a
              fall with a broken pelvis … but then I started training with Alex, now I have everything I need,
              he makes perfectly tailored individual training plans, gives help nutrition and, above all,
              great mental support !! I can ask him anything at any time of the day and also at night and
              always get an adequate answer! With him,
            </p>
            <p className="para px-30">
              I was able to significantly improve my FTP in 10 weeks as well as my general well-being and the
              feeling for my body. The best thing about it is I train significantly fewer hours a week and
              have plenty of time for the family … so nothing better could have happened to me than finding
              Alex.
            </p>
          </div>
        ) : (
          <p className="para px-30">
            Alex is the best thing that could have happened to me, he’s not just a trainer, no, he lives this
            job 100%..{' '}
          </p>
        )}

        <div className="px-30 ">
          <button onClick={() => setShowMatthiasText(!isShowMatthiasText)} className="more-btn">
            {isShowMatthiasText ? 'LESS' : 'MORE'}
          </button>
        </div>
      </div>
      {/* TESTIMONIAL ITEM  */}
      <div className="prfile" style={{ marginTop: '60px' }}>
        <Image width={120} height={120} src={david} alt="david" className="filter-gray" />
        <h1 className="heading px-30">David Gilbert</h1>
        {isShowDavidText ? (
          <div>
            <p className="para px-30">
              I want a coach to help me improve and develop physically and mentally. To put together a plan
              and structure that is engaging, takes me out of my comfort zone and gets results. That’s the
              minimum you should expect.
            </p>
            <p className="para px-30">
              I’ve been fortunate to have a good coach and a great coach in the past but then, on another
              level entirely, there’s Alex Coh.
            </p>
            <p className="para px-30">
              Workouts are cleverly structured and I’m genuinely excited (and a little nervous!) to see what’s
              laid out in Training Peaks.
            </p>
            <p className="para px-30">
              I have absolute trust in the process and plan and get daily feedback, advice and support. And
              its genuine. The sessions are often uncompromising, but I don’t want a coach who can make me
              average, and with Alex, there is no average. I’ve invested myself in Alex but he’s equally
              invested himself in me. I want to be my best. He does too.
            </p>
            <p className="para px-30">
              He gets me. Understands I have a business, a busy family life and limited time. If you want to
              see what you’re REALLY capable of, I can’t recommend this man highly enough. It’s a great ride
              and I’m absolutely loving it!
            </p>
          </div>
        ) : (
          <p className="para px-30">
            I want a coach to help me improve and develop physically and mentally. To put together a plan and
            structure that is engaging...{' '}
          </p>
        )}

        <div className="px-30 ">
          <button onClick={() => setShowDavidText(!isShowDavidText)} className="more-btn">
            {isShowDavidText ? 'LESS' : 'MORE'}
          </button>
        </div>
      </div>
      {/* TESTIMONIAL ITEM  */}
      <div className="prfile" style={{ marginTop: '60px' }}>
        <Image width={120} height={120} src={anu} alt="anu" className="filter-gray" />
        <h1 className="heading px-30">Anu Lammi</h1>
        {isShowAnuText ? (
          <div>
            <p className="para px-30">
              I am consistently feeling like a super well cared athlete.” Sometimes, at first glance, you feel
              when you meet a person who truly cares. Starting from bike fitting nearly four years ago, we
              have travelled into an all- inclusive coaching relationship. Through extremely rough times and
              changing conditions in life, the unique and distinctive approach of Alex has been tremendous.
            </p>
            <p className="para px-30">I’m happy to stay under your wing and continue to develop myself.</p>
          </div>
        ) : (
          <p className="para px-30">
            I am consistently feeling like a super well cared athlete.” Sometimes, at first glance, you feel
            when you meet a person who truly cares...{' '}
          </p>
        )}

        <div className="px-30 ">
          <button onClick={() => setShowAnuText(!isShowAnuText)} className="more-btn">
            {isShowMatthiasText ? 'LESS' : 'MORE'}
          </button>
        </div>
      </div>
      {/* TESTIMONIAL ITEM  */}
      <div className="prfile" style={{ marginTop: '60px' }}>
        <Image width={120} height={120} src={tim} alt="tim" className="filter-gray" />
        <h1 className="heading px-30">Tim Loake</h1>
        {isShowTimText ? (
          <div>
            <p className="para px-30">
              I have had an on/off love affair for the best part of 30years with cycling, falling in love with
              it multiple times over the course of my adult life, only for various complications of either
              injury or distraction to take me away from my bikes, often for years at a time. I found I never
              really got fit enough to be truly comfortable with my performance despite joining a local club
              and riding regularly; and in 2015 I resolved to try and change that with the addition of some
              indoor training on a turbo trainer. This was another expensive failure and my turbo sat unloved
              in my shed for a few more years. In 2018 we went on a family holiday to Greece, and I found
              there were bikes available to ride and organised guided rides to take part in – fabulous! I was
              106kg (on a good day) at the time, and struggled through many of the group rides, last up every
              hill, including one particularly shameful experience walking up a mountain, that should have
              taken a recreational cyclist 20minutes or so, and it took me 40.
            </p>
            <p className="para px-30">
              I enjoyed the trip, despite my woeful fitness, and when I returned home, I dusted off my turbo
              trainer, and started a zwift subscription in September 2018. My first FTP test had me somewhere
              around 230w, for my 106kg. I built into my training, starting at a couple of days a week, and
              building over the years to 6/7 days a week now. I did group rides, learnt about training methods
              and nutrition and gradually built my performance over the next 3 years to this summer, I went on
              the same holiday again, now with an FTP of 375w and weighing 87kg. I destroyed every mountain,
              left all other riders behind me, and finally felt that I had reached the performance level I had
              been searching for for the last 30years. But where do I go now? How can I go further? Also this
              summer I had a fairly decent accident, smashing my shoulder socket and humerus head and needing
              surgery to rebuild my shoulder, taking me off the bike for a little while. In an effort to solve
              both the recovery from my injury, as well as take my performance to the next level and see how
              far I can really go, at 44 years old, I signed up with Alex as my first coach.
            </p>
            <p className="para px-30">
              I’m now 2 months in to working with Alex, and I have to say the experience has been excellent so
              far. Alex is incredibly active in both understanding my performance and adapting my training
              plan accordingly. He’s always available for questions and support, and has rewritten my plan
              completely at least twice as circumstances have changed with my health and availability.
            </p>
            <p className="para px-30">
              As a technology executive with two sons who play multiple sports at both school and club, my
              time is limited, and Alex is great at maximising the effectiveness of every training hour. I am
              typically able to find about 10hrs a week, which is consistent with what I was doing before
              joining Alex, but my strength and endurance has definitely improved in the first two months,
              despite no increase in volume, and I look forward to seeing how far we can go together.
            </p>
          </div>
        ) : (
          <p className="para px-30">
            I have had an on/off love affair for the best part of 30years with cycling, falling in love with
            it multiple times over the course of my adult life..{' '}
          </p>
        )}

        <div className="px-30 ">
          <button onClick={() => setShowTimText(!isShowTimText)} className="more-btn">
            {isShowTimText ? 'LESS' : 'MORE'}
          </button>
        </div>
      </div>

      {/* TESTIMONIAL ITEM  */}
      <div className="prfile" style={{ marginTop: '60px' }}>
        <Image width={120} height={120} src={michael} alt="michael" className="filter-gray" />
        <h1 className="heading px-30">Michael Robinson</h1>
        {isShowMichaelText ? (
          <div>
            <p className="para px-30">
              The coaching relationship I have with Alex is incredibly important to me. His support empowers
              me to achieve my goals. I am a partner at a Big Four global accountancy firm and have a young
              family, free time is not something I have in abundance. Despite my time constraints, Alex’s
              considered and focused coaching allows me to compete at a high level at middle and long distance
              triathlon. Alex’s support has crossed over into my professional life where insights I have
              gained from his no-nonsense approach has helped me deal with obstacles and address a variety of
              workplace stresses. For me he is a valued advisor that I thoroughly recommend for anybody
              thinking about competing in endurance sports.
            </p>
          </div>
        ) : (
          <p className="para px-30">
            The coaching relationship I have with Alex is incredibly important to me. His support empowers...{' '}
          </p>
        )}

        <div className="px-30 ">
          <button onClick={() => setShowMichaelText(!isShowMichaelText)} className="more-btn">
            {isShowMichaelText ? 'LESS' : 'MORE'}
          </button>
        </div>
      </div>
      {/* TESTIMONIAL ITEM  */}
      <div className="prfile" style={{ marginTop: '60px' }}>
        <Image width={120} height={120} src={chris} alt="chris" className="filter-gray" />
        <h1 className="heading px-30">Chris Loake</h1>
        {isShowChrisText ? (
          <div>
            <p className="para px-30">
              Alex is a coach that understands high performance, having competed at a high level himself. This
              means that he knows when it’s time to push on, and when it’s time to rest, as well as what it
              feels like to both win and lose. This perspective is very helpful in ensuring that the
              psychological aspects of the training loads are considered, as well as the physiological. As a
              time-crunched athlete, I have limited training hours available each week around a busy home and
              work life. Alex is both flexible in his approach to adjusting schedules on the fly, as well as
              thoughtful about how to make the most of the training time available. I have already recommended
              Alex to other athletes I know and wouldn’t hesitate to do so again.
            </p>
          </div>
        ) : (
          <p className="para px-30">
            TAlex is a coach that understands high performance, having competed at a high level himself. This
            means that he knows when it’s time to...{' '}
          </p>
        )}

        <div className="px-30 ">
          <button onClick={() => setShowChrisaText(!isShowChrisText)} className="more-btn">
            {isShowChrisText ? 'LESS' : 'MORE'}
          </button>
        </div>
      </div>
      {/* TESTIMONIAL ITEM  */}
      <div className="prfile" style={{ marginTop: '60px' }}>
        <Image width={120} height={120} src={juhana} alt="juhana" className="filter-gray" />
        <h1 className="heading px-30">Juhana Häkkinen</h1>
        {isShowJuhanaText ? (
          <div>
            <p className="para px-30">I have fought with my stomach for 25 years. Tried everything.</p>

            <ol className="para px-30">
              <li>lactose free</li>
              <li>gluten free</li>
              <li>fodmap</li>
              <li>coloscopies</li>
              <li>gastrosopia</li>
              <li>acupuncture</li>
            </ol>

            <p className="para px-30">
              Visited so many doctors and specialists I have lost count. I have done triathlon now for five
              years and when my friend recommended Alex with his own dietary results I was sold. I started in
              January with Alex and in June I already had my first Ironman 70.3. race without any stomach
              problems. I recover faster, can train harder and energy and nutrients are absorbed finally so I
              am healthier as well. I have hired Alex a few months ago to be my triathlon coach as well and I
              have been very happy so far. This year has been really heavy on the personal life but my stomach
              has been better than ever and I am looking forward to the rest of my sports journey.
            </p>
            <p className="para px-30">Definitely thumbs up and full recommendation.</p>
          </div>
        ) : (
          <p className="para px-30">I have fought with my stomach for 25 years. Tried everything... </p>
        )}

        <div className="px-30 ">
          <button onClick={() => setShowJuhanaText(!isShowJuhanaText)} className="more-btn">
            {isShowJuhanaText ? 'LESS' : 'MORE'}
          </button>
        </div>
      </div>

      {/* TESTIMONIAL ITEM  */}
      <div className="prfile" style={{ marginTop: '60px' }}>
        <Image width={120} height={120} src={katariina} alt="katariina" className="filter-gray" />
        <h1 className="heading px-30">Katariina Lajunen</h1>
        {isShowKatariinaText ? (
          <div>
            <p className="para px-30">
              Encouraging, supportive and analytic. These three words are the first ones coming to my mind
              when I think of Alex as my coach. He´s been supporting me with road biking for a couple of
              months now and there are many factors that I value in our cooperation. First of all, it really
              is cooperation. He´s always taking the big picture into account and understands that cycling is
              not all my life since I´m a working mother of two kids who also has other weekly hobbies.
              Working out should be fun, Alex says. And to me it really is, when I have a professional
              planning the cycling workouts according to my personal fitness and goals. Workouts are so
              diverse that they easily keep up the interest and motivation to continuously learn and develop.
              And for sure, it´s not only fun but it´s also demanding, in a positive way. I´m amazed how Alex
              is able to both analyze and utilize the data he sees and build the positive development in
              performance. It´s really cool to have a coach who is passionate about what he´s doing and who
              truly wants to make his customers succeed!
            </p>
          </div>
        ) : (
          <p className="para px-30">
            {' '}
            Encouraging, supportive and analytic. These three words are the first ones coming to my mind when
            I think of Alex as...{' '}
          </p>
        )}

        <div className="px-30 ">
          <button onClick={() => setShowKatariinaText(!isShowKatariinaText)} className="more-btn">
            {isShowKatariinaText ? 'LESS' : 'MORE'}
          </button>
        </div>
      </div>
      {/* TESTIMONIAL ITEM  */}
      <div className="prfile" style={{ marginTop: '60px' }}>
        <Image width={120} height={120} src={james} alt="james" className="filter-gray" />
        <h1 className="heading px-30">James Barney</h1>
        {isShowJamesText ? (
          <div className="para px-30">
            <p>
              Alex is much more than your regular coach. His understanding of performance, human psychology,
              nutrition and basically anything else that affects you as a person is unlimited. Alex will guide
              you so not only do you meet your goals but smash them while still having balance in life. He has
              helped me understand myself and where I have been going wrong all these years – he has
              reconstructed my training and recovery and I have never performed better.
            </p>
            <p>
              I made it to the Zwift premier league(highest level of racing on Zwift) this year and in 3 races
              I took 2 wins and one second place – results speak for themselves.
            </p>
            <p>
              His guidance off the bike has changed my outlook and approach not only to my training and racing
              but any other obstacle I come across. With Alex you feel a part of the team and not just on your
              own and that you are getting what is best for you. It is a rare quality to find this day.
            </p>
            <p>
              I am not one who has a great skill with words, sadly Alex has no fix for that, but I warmly
              recommend working with him if you want to tap into your potential and reach your 100 percent.
            </p>
          </div>
        ) : (
          <p className="para px-30">
            Alex is much more than your regular coach. His understanding of performance, human psychology,
            nutrition and basically anything else...{' '}
          </p>
        )}

        <div className="px-30 ">
          <button onClick={() => setShowJamesText(!isShowJamesText)} className="more-btn">
            {isShowJamesText ? 'LESS' : 'MORE'}
          </button>
        </div>
      </div>

      {/* TESTIMONIAL ITEM  */}
      <div className="prfile" style={{ marginTop: '60px' }}>
        <Image width={120} height={120} src={markus} alt="markus" className="filter-gray" />
        <h1 className="heading px-30">Markus Kaarto</h1>
        {isShowMarkusText ? (
          <div className="para px-30">
            <p>
              I’ve been loving cycling since I was 10 years old but have pretty much always had issues with my
              cycling position. I originally got to know Alex after searching for the best bike fitter in
              town. Spending the 1st two hours in bike fit, listening to his knowledge and enthusiasm to find
              results was something I hadn’t experienced in the past 30 years.
            </p>
            <p>
              During the next two years, he became my God of Aerodynamics, explaining clearly the benefits one
              can achieve via an effective position on the bike. His knowledge was so great that I got the
              courage to invest into a weapon of my dreams and have really seen the results in watts needed to
              achieve fast speeds on a bike. For the past year, I’ve also had Alex as my coach – seeing again
              the benefits of his wide knowledge and experience. In just six months under his training, I was
              able to increase the FTP by around 20%. By the end of the season, I was able to still increase
              the watts & improve the position, thus reaching the result in a full distance Ironman that I had
              set as a goal in 18 months time. This is especially significant when taking into account that,
              at the same time, I had to reduce the amount of training hours due to extreme workload. The
              result was just astonishing!
            </p>
            <p>I couldn’t be happier in the bike fit & coaching from Alex and can highly recommend him!</p>
          </div>
        ) : (
          <p className="para px-30">
            I’ve been loving cycling since I was 10 years old but have pretty much always had issues with my
            cycling position. I originally got to know...{' '}
          </p>
        )}

        <div className="px-30 ">
          <button onClick={() => setShowMarkusText(!isShowMarkusText)} className="more-btn">
            {isShowMarkusText ? 'LESS' : 'MORE'}
          </button>
        </div>
      </div>
      <div className=" border-line">
        <span></span>
      </div>
    </>
  )
}

export default Testimonols
