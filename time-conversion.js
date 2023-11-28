function timeConversion(s) {
  
    // check for PM time
  if (s.includes("PM")) {
    // removes PM from string
    s = s.replace("PM", "");
    // remove : from string
    s = s.replaceAll(":", "");
    // converts string to integer
    s = parseInt(s);

    // handles the case where time is 12 or greater
    if (s >= 120000) {
      s = s.toString();
      // concatenates string
      s = s[0] + s[1] + ":" + s[2] + s[3] + ":" + s[4] + s[5];
      console.log(s);
      return s;
      // handles the case where time is less than 12
    } else {
      s = s + 120000;
      s = s.toString();
      // concatenates string
      s = s[0] + s[1] + ":" + s[2] + s[3] + ":" + s[4] + s[5];
      console.log(s);
      return s;
    }
  } 
  // check for AM time
  else {
    // removes AM from string
    s = s.replace("AM", "");
    // removes : from string
    s = s.replaceAll(":", "");
    // converts string to integer
    s = parseInt(s);
    // handles the case where time is 12 or greater
    if (s >= 120000) {
      console.log(s);
      s = s.toString();
      s = s.replace("12", "00");
      // concatenates string
      s = s[0] + s[1] + ":" + s[2] + s[3] + ":" + s[4] + s[5];
      console.log(s);
      return s;
      // handles the case where time is less than 12
    } else {
      s = s.toString();
      // concatenates string
      s = "0" + s[0] + ":" + s[1] + s[2] + ":" + s[3] + s[4];
      console.log(s);
      return s;
    }
  }
}
