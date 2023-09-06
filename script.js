var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
var textbox = $("#convert_text");

var instructions = $("#instructions");

var content = '';

recognition.continuous = true;

recognition.onstart = function() {
    instructions.text("Voice recognition is on");
    }

recognition.onspeechend = function() {
    instructions.text("No activity");
    }

recognition.onerror = function() {
    instructions.text("Try again");
    }

recognition.onresult = function(event) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    content += transcript;
    textbox.val(content);
    }

$('#click_to_record').click(function(event) {
  if (content.length) {
    content += '';
  }
  recognition.start();
});