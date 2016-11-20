import sys
reload(sys)
sys.setdefaultencoding('utf8')
from flask import Flask,render_template,request,redirect
import json
import check_genre
app=Flask(__name__)

@app.route('/',methods=['GET','POST'])
def index():
	if request.method=='POST':
		text=request.json['hello']
		number=check_genre.execute(text)
		return json.dumps({'hello':number},200,{'ContentType':'application/json'})
	return render_template("index1.html")

if __name__=='__main__':
	app.run(debug=True)