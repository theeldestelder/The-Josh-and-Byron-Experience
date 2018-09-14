import xml.etree.ElementTree as ET

profileFile = 'SystemConfig.xml'
sequenceFile = 'test sequence.tim'

tree = ET.parse(profileFile)
root = tree.getroot()

# store channel name and IDs in dictionary - name: id
channelIds = {}
for channel in root.iter('Node'):
    # make sure the channel isn't a parent (it's actually a channel)
    if channel.get('channelId') != None:
        id = channel.get('id')
        name = channel.get('name')

        channelIds[name] = id

for key in channelIds:
    print(key, ": ", channelIds[key])


tree = ET.parse(sequenceFile)
root = tree.getroot()

# find the length of the sequence
length = 0
for time in root.iter('Length'):
    length = time.text
    print("Length: " + length)

for path in root.iter('_dataModels'):
    print(path.tag, path.attrib)


#for child in root:
    #print(child.tag, child.attrib)
