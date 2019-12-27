import React, { SyntheticEvent, useContext } from "react";
import { Item, Button, Label, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { observer } from "mobx-react-lite";
import ActivityStore from "../../../app/stores/activityStore";

interface IProps {
  deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
  submitting: boolean;
  target: string;
}

const ActivityList: React.FC<IProps> = ({
  deleteActivity,
  submitting,
  target
}) => {
  const activityStore = useContext(ActivityStore);
  const {activities, selectActivity} = activityStore;
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
                    onClick={(e) => deleteActivity(e, activity.id)}
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