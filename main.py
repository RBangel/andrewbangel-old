import cgi
import os

from google.appengine.api import users
from google.appengine.ext import webapp
from google.appengine.ext.webapp import template
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.api import mail

class MainPage(webapp.RequestHandler):
	def get(self):
		template_values = {
	    }

		path = os.path.join(os.path.dirname(__file__), 'portfolio.html')
		self.response.out.write(template.render(path, template_values))


class SendContact(webapp.RequestHandler):
	def post(self):
		sender_address = 'ajbangel@gmail.com'
		recipient = 'abangel@purdue.edu'
		subject = cgi.escape(self.request.get('subject'))

		message = cgi.escape(self.request.get('name')) + '\n'
		message += cgi.escape(self.request.get('email')) + '\n'
		message += subject + '\n'
		message += '\n'
		message += cgi.escape(self.request.get('message')) + '\n'
		
		mail.send_mail( sender_address, recipient, subject, message )
		
		self.response.out.write('<html><body><p><a href="http://andrewbangel.appspot.com">Your message has been sent.  Click here to go back to my portfolio.</a></p>')
		self.response.out.write('</body></html>')

application = webapp.WSGIApplication(
                                     [('/', MainPage),
                                      ('/contact', SendContact)],
                                     debug=True)

def main():
    run_wsgi_app(application)

if __name__ == "__main__":
    main()