import json, sys, time
__author__  = 'Anthony Vilarim Caliani'
__contact__ = 'https://github.com/avcaliani'
__license__ = 'MIT'

time.sleep(5)
print(json.dumps({
  'name': 'Anthony Caliani',
  'tag': '@avcaliani @python',
  'github': 'https://github.com/avcaliani',
  'gitlab': 'https://gitlab.com/avcaliani'
}))

sys.stdout.flush()
