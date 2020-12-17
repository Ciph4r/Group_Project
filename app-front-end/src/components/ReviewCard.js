import React,{useState} from 'react';
import Alert from '@material-ui/lab/Alert';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { grey} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '95%',
        width:'100%',
        marginBottom:'10px'
    },

    avatar: {
      backgroundColor: grey[500],
      width:'100%',
      borderRadius:'0 0 0 0'
    },
    header: {
        backgroundColor: grey[500],
    },
    footer: {
        textAlign:'right',
        height:'0px',
        paddingTop:'0px',
        backgroundColor: grey[300],
    }
  }));

export default function ReviewCard({carReview}) {
    const classes = useStyles();

    let content;
    if(carReview.length){
        content = (
            <div className='card-modal-ratings'>
                <h1>Reviews</h1>
                {carReview.map((review , key) => (
                <Card className={classes.root}>
                    <CardHeader
                        className={classes.header}
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                        <Rating name="read-only" value={review.star} readOnly />
                        </Avatar>
                    }
            
                    title={review.tittle}
                    subheader={review.time}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {review.message}
                        </Typography>
                    </CardContent>
                    <CardContent className={classes.footer} >
                        <Typography className={classes.footer}variant="body3" color="textSecondary" component="p">
                        ---{review.ownerName}
                        </Typography>
                    </CardContent>
                </Card>
                ))}
            </div>
        )
    }else{
        content = (
            <div className='card-modal-ratings'>
                <h1>There's No Review Yet, Why don't you be the first one</h1>
            </div>
        )
    }
    return (
        <div>
        {content}
        </div>




            // <Card className='review-card' >
            //     <Card.Header className='card-header'>
            //         <Rating name="read-only" value={2} readOnly />
            //         <h5>sadasd</h5>
            //     </Card.Header>
            //     <Card.Body>
            //     <blockquote className="blockquote mb-0">
            //         <p>
            //         {' '}
            //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            //         erat a ante.{' '}
            //         </p>
            //         <footer className="blockquote-footer">
            //         Someone famous in <cite title="Source Title">Source Title</cite>
            //         </footer>
            //     </blockquote>
            //     </Card.Body>
            // </Card>
            
    )
}