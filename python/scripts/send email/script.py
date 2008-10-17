import smtplib
import sys
import commands
from email.MIMEText import MIMEText

le = commands.getoutput(' cat %s' % sys.argv[1])

try :
	serv=smtplib.SMTP()
	smtpserver = "smtp.segura.eti.br"
	serv.connect(smtpserver,25)
	serv.login("edy@segura.eti.br", "*****")
	msg1 = MIMEText("%s" % le)
	msg1['Subject'] = 'Chora Boneca'
	msg1['From'] = "edy@segura.eti.br"
	msg1['To'] = "edysegura@gmail.com"
	serv.sendmail("edy@segura.eti.br", "edysegura@gmail.com", msg1.as_string())
	serv.quit()
except Exception, e:
	print "Erro : %s" % e
else:
	print "Concluído"
