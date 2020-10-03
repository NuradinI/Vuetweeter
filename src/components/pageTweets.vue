<template>
  <div id="site">
    <div id="userone">
      <h3 v-html="tweets[0].author"></h3>
      <p v-html="tweets[0].userOne"></p>
      <button>Comment</button>
      <p v-html="tweets[0].date"></p>
    </div>
    <br />
    <h3 v-html="tweets[1].author"></h3>
    <p v-html="tweets[1].userTwo"></p>
     <button>Comment</button>
    <p v-html="tweets[1].date"></p>
    <br />
    <h3 v-html="tweets[2].author"></h3>
    <p v-html="tweets[2].userThree"></p>
     <button>Comment</button>
    <p v-html="tweets[2].date"></p>
    <br />
    <h3 v-html="tweets[3].author"></h3>
    <p v-html="tweets[3].userFour"></p>
     <button>Comment</button>
    <p v-html="tweets[3].date"></p>
    <br />
    <h3 v-html="tweets[4].author"></h3>
    <p v-html="tweets[4].userFive"></p>
     <button>Comment</button>
    <p v-html="tweets[4].date"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tweets: [
        {
          userOne:
            "My cooking is fantastic, and I want to go faster. Fabulous ingenious beats, I say. #grimball #randomtweet",
          author: "Taylor",
          date: "December 19, 8:54 PM"
        },
        {
          userTwo:
            "My smile is a disaster, and I want to travel more. A bit of awkward robots, for starters. #ficklenut #randomtweet",
          author: "Bob",
          date: "July 19, 5:15 PM"
        },
        {
          userThree:
            "My better half is owned by the banks, and I want to get more done. More free music, man. #noslam #randomtweet",
          author: "Billy",
          date: "February 29, 7:55 AM"
        },
        {
          userFour:
            "My intelligence is funky, and I want to live worry free. Unlikely better beats, actually. #holysport #randomtweet",
          author: "Jessica",
          date: "October 8, 3:15 PM"
        },
        {
          userFive:
            "My smile is amazing, and I want to go to Mars. Unlikely miniscule dates, for starters. #globalsludge #randomtweet",
          author: "Hannah",
          date: "October 6, 9:23 PM"
        }
      ]
    };
  }
};
</script>

<style scoped>
#site {
  align-content: center;
}

</style>