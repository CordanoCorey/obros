import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'obros-speech-topics',
  templateUrl: './speech-topics.component.html',
  styleUrls: ['./speech-topics.component.scss']
})
export class SpeechTopicsComponent implements OnInit {
  topics = [
    {
      name: 'The Pita Principle',
      title: 'The PITA Principle: How to Work with and Avoid Becoming a Pain In The Ass',
      description: `Human Resources professionals indicate that the "softer skills" of interpersonal effectiveness and character assets are most valued in organizations. Dr. Bob Orndorff and Dr. Dulin Clark, the authors of The PITA Principle: How to Work with and Avoid Becoming a Pain In The Ass, highlight seven types of PITAs or difficult personalities found most prevalently in the workplace and offer strategies on working more effectively with each type of PITA and on becoming more aware of your own PITA tendencies. Through high-energy breakout sessions, participants will generate applicable strategies for working more effectively with each type of prominent PITA and on becoming more aware of their own tendencies toward being difficult to work with in specific, identified work situations.`
    },
    {
      name: 'Leadership EQ',
      title: 'Maximizing Emotional Intelligence to Achieve Leadership Excellence ',
      description: `Daniel Goleman, author of Working with Emotional Intelligence, states that 90 percent of effectiveness in leadership jobs can be accounted for by emotional intelligence. In this workshop, Dr. Orndorff will present the differences between successful leaders and ineffective leaders based on emotional intelligence, character traits, and interpersonal skills. You will learn about the top leadership success factors and identify your own leadership assets and growth areas.`
    },
    {
      name: 'Be the leader you are',
      title: 'Real Leadership:  Being Real with Who You Are as a Leader',
      description: `Heightening your self-awareness and staying true to who you are and how you interact are critical to your success as a leader. In this seminar, you will identify your leadership strengths and growth areas based on your personality profile and your attentional profile (i.e., how you naturally attend to supervisees). You will then create a leadership development plan with strategies to maximize your leadership strengths and minimize your leadership weaknesses.`
    },
    {
      name: 'Maximizing Your Potential',
      title: 'Maximizing your Potential & Satisfaction at Work',
      description: `Sometimes it's easy to lose track of the strengths and talents that you bring to your job. Since you are so busy with your daily responsibilities, you can easily overlook your unique skill sets or take them for granted. This workshop will help you reflect on the special ways in which you perform your work, the traits that allow you to be effective, and ways that you can more fully maximize your talents. Increasing your work satisfaction is the ultimate goal for this workshop!`
    },
    {
      name: 'Work-Life Balance',
      title: 'The Work-Life Balancing Act and Your PIE of LIFE',
      description: `Think of all the roles we play in life- son, daughter, mom, dad, husband, wife, friend, volunteer, worker, etc. In this seminar, Bob provides a new perspective on the ongoing work-life balance challenge, encouraging you to think of your work and life roles as the pieces of a special kind of pie – your pie of life! A key to happiness is finding ways to increase the size of those pieces of your pie of life that taste best, and decrease the size of those that dont taste as good.`
    },
    {
      name: 'Character Through Adversity',
      title: 'Growing Through Conflict: Approach Adversity as an Opportunity to Showcase Your Character ',
      description: `There's no better measure of ones character than how one faces and embraces adversity. And adversity is and will always be a part of the roller-coaster of life. In this seminar, Bob will discuss and challenge you to adopt a healthy philosophy of approaching adversity. You will also learn the most effective strategies for turning conflict with another person into a positive outcome-one that strengthens working relationships and builds character.`
    },
    {
      name: 'Engaging Your Audience',
      title: 'You had me at hello: How to Engage and Energize Your Audience',
      description: `Tell me I'll forget, Show me I'll remember, Involve me I'll learn. This seems to be truer today than ever when it comes to engaging audiences in the workshops we deliver. As an engaging and dynamic speaker and presenter for 20 years, Bob will provide you with audience engaging best practices related to team-building, ice-breakers, break-out sessions, and the incorporation of stories, physical humor, video clips, audio clips, and inspirational sayings/poems.`
    },
    {
      name: '10 Career Essentials',
      title: '10 Career Essentials: Career Success is all about Character',
      description: `Increasingly, employers are looking to hire and maintain employees who not only know how to read and write, but also how to confront issues diplomatically, work well with all types of people, and demonstrate a high level of integrity. Upon analyzing several national survey reports spanning over thousands of company recruiters, 10 primary skills and traits surfaced, including teamwork, interpersonal skills, appreciating diversity, leadership, honesty, integrity, and facing adversity (as featured in Becoming The Best Me, 3rd ed.). These 10 career essentials will be highlighted in this seminar, including strategies on how to utilize them on the job in order to experience career success!`
    }
  ];
  activeIndex = null;
  flipped = [false, false, false, false, false, false, false, false];
  flipping = [false, false, false, false, false, false, false, false];

  constructor() { }

  ngOnInit() {
  }

  // toBack(e: number) {
  //   this.flipped = this.flipped.map((x, i) => i === e ? true : x);
  //   this.flipping = this.flipping.map((x, i) => i === e ? true : x);
  //   setTimeout(() => {
  //     this.flipping = this.flipping.map((x, i) => i === e ? false : x);
  //   }, 800);
  // }

  // toFront(e: number) {
  //   console.log(e);
  //   const timer = setInterval(() => {
  //     if (!this.flipping[e]) {

  //       this.flipped = this.flipped.map((x, i) => i === e ? false : x);
  //       clearInterval(timer);
  //     }
  //   }, 300);
  // }

  // toggle(e: number) {
  //   this.flipped = this.flipped.map((x, i) => i === e ? !x : x);
  // }

  toBack(e, i) {
    console.dir(e);
    // console.dir(e.target);
    // console.dir(e);
    this.activeIndex = i;
    // const card = e.target;
    const card = e;
    setTimeout(() => {
      card.classList.add('flipped');
      card.classList.add('flipping');
    }, 0);
    setTimeout(() => {
      card.classList.remove('flipping');
    }, 800);
  }

  toFront(e, i) {
    console.dir(e);
    // console.dir(e.toElement);
    // console.dir(e.fromElement);
    // const card = e.target;
    const card = e;
    const timer = setInterval(() => {
      if (!card.classList.contains('flipping')) {
        card.classList.remove('flipped');
        clearInterval(timer);
      }
    }, 300);
  }

  toggle(e, i) {
    this.activeIndex = i;
    const card = e;
    console.log(card.classList.value);
    card.classList.toggle('flipped');
    console.log(card.classList.value);
  }

  public trackByFn(index, item) {
    return item ? null : index;
  }

}
