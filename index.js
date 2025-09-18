<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Margadharshi Chatbot</title>
  <!-- Load the Dialogflow Messenger script -->
  <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
  <style>
    /* Optional: customize some styles of the chat widget */
    df-messenger {
      --df-messenger-button-titlebar-color: #1f6feb;
      --df-messenger-bot-message: #f1f3f5;
      --df-messenger-user-message: #0b8f5b;
      --df-messenger-font-color: #000000;
      /* you can add more customization here if you want */
    }
  </style>
</head>
<body>
  <h1>Welcome to Margadharshi Advisor</h1>

  <!-- Dialogflow Messenger widget -->
  <df-messenger
    chat-title="Margo"
    agent-id="" /* place your agent id here */ 
    language-code="en"
    project-id="margo-hbni"
    location="global"
    intent="WELCOME">
  </df-messenger>

</body>
</html>

