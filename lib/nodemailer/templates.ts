export const EMAIL_SENDING = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Message</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0d0f12; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e2e8f0;">
  
  <!-- Container Wrapper -->
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0d0f12; padding: 40px 10px;">
    <tr>
      <td align="center">
        
        <!-- Main Card -->
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #161b22; border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.1); overflow: hidden; border-collapse: separate;">
          
          <!-- Header Bar -->
          <tr>
            <td style="padding: 24px 32px; background-color: #1c2128; border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
              <table width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="font-size: 18px; font-weight: 700; color: #646cff; letter-spacing: 0.5px;">Hussam Ahmad</span>
                    <span style="font-size: 12px; color: #8b949e; display: block; margin-top: 2px;">Portfolio Contact System</span>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; padding: 4px 12px; font-size: 11px; font-weight: 600; color: #3fb950; background-color: rgba(63, 185, 80, 0.15); border-radius: 20px;">NEW INQUIRY</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              <h2 style="margin: 0 0 8px 0; font-size: 20px; color: #ffffff;">{{subject}}</h2>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #8b949e;">You have received a new message via your portfolio contact form.</p>

              <!-- Sender Info Box -->
              <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #0d0f12; border-radius: 12px; padding: 16px; margin-bottom: 24px; border: 1px solid rgba(255, 255, 255, 0.05);">
                <tr>
                  <td style="padding-bottom: 10px; font-size: 13px; color: #8b949e; width: 80px;">From:</td>
                  <td style="padding-bottom: 10px; font-size: 13px; color: #ffffff; font-weight: 600;">{{name}}</td>
                </tr>
                <tr>
                  <td style="padding-bottom: 10px; font-size: 13px; color: #8b949e;">Email:</td>
                  <td style="padding-bottom: 10px; font-size: 13px; color: #646cff; font-weight: 500;">
                    <a href="mailto:{{email}}" style="color: #646cff; text-decoration: none;">{{email}}</a>
                  </td>
                </tr>
                <tr>
                  <td style="font-size: 13px; color: #8b949e;">Phone:</td>
                  <td style="font-size: 13px; color: #ffffff;">{{phone}}</td>
                </tr>
              </table>

              <!-- Message Body -->
              <div style="margin-bottom: 24px;">
                <label style="display: block; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #8b949e; margin-bottom: 8px;">Message</label>
                <div style="background-color: #0d0f12; padding: 20px; border-radius: 12px; font-size: 14px; line-height: 1.6; color: #d2d7df; white-space: pre-wrap; border-left: 3px solid #646cff;">{{message}}</div>
              </div>

              <!-- Quick Action Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <a href="mailto:{{email}}?subject=Re: {{subject}}" style="display: inline-block; padding: 12px 28px; background-color: #646cff; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; border-radius: 10px; transition: background-color 0.2s;">
                      Reply Directly via Email
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #1c2128; border-top: 1px solid rgba(255, 255, 255, 0.08); text-align: center; font-size: 12px; color: #6e7681;">
              Sent automatically from your Portfolio Website • Based in Syria
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>`;
