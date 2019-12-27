import React, { useContext } from "react";
import { Item, Button, Label, Segment } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import ActivityStore from "../../../app/stores/activityStore";

const ActivityList: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  const {
    activitiesByDate: activities,
    selectActivity,
    deleteActivity,
    submitting,
    target
  } = activityStore;
  return (
    <Segment>
      <Item.Group divided>
        {activities.map(activity => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button.Group floated="right">
                  <Button
                    onClick={() => selectActivity(activity.id)}
                    content="View"
                    color="blue"
                    floated="right"
                  />
                  <Button
                    name={activity.id}
                    loading={target === activity.id && submitting}
                    onClick={e => deleteActivity(e, activity.id)}
                    content="Delete"
                    color="red"
                    floated="right"
                  />
                </Button.Group>
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default observer(ActivityList);
