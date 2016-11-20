def execute(s):
	import sys
	reload(sys)
	sys.setdefaultencoding('utf8')
	from nltk.corpus import brown,stopwords
	sw=stopwords.words("english")
	s=s.split()
	s=list(map(lambda x: x.lower(),s))
	l=dict()
	s=list(set(s))
	s=[x for x in s if x not in sw]
	l[3]=len([i for i in list(map(lambda x: x.lower(), list(brown.words(categories="adventure")))) if i in s])
	l[5]=len([i for i in list(map(lambda x: x.lower(), list(brown.words(categories="humor")))) if i in s])
	l[2]=len([i for i in list(map(lambda x: x.lower(), list(brown.words(categories="mystery")))) if i in s])
	l[4]=len([i for i in list(map(lambda x: x.lower(), list(brown.words(categories="romance")))) if i in s])
	l[1]=len([i for i in list(map(lambda x: x.lower(), list(brown.words(categories="science_fiction")))) if i in s])
	genre=max(l.itervalues())
	print l
	for i,j in l.iteritems():
		if j==genre:
			return i